#![no_std]

extern crate alloc;
#[macro_use] extern crate terminal_print;
extern crate hpet;
extern crate hashbrown;
extern crate qp_trie;
extern crate apic;
extern crate runqueue;
extern crate libtest;
extern crate spawn;
extern crate getopts;

use alloc::{
    string::{String, ToString},
    vec::Vec,
    collections::{BTreeSet,BTreeMap}
};
use hpet::get_hpet;
use hashbrown::HashMap;
use qp_trie::{Trie, wrapper::BString};
use getopts::{Matches, Options};
use libtest::*;
use core::sync::atomic::Ordering;

mod threadtest;
use threadtest::{NTHREADS, do_threadtest};

const ITERATIONS: u64 = 10_000;
const TRIES: u64 = 10;
const CAPACITY: [usize; 10] = [8,16,32,64,128,256,512,1024,2048,4096];
const VERBOSE: bool = false;


pub fn main(args: Vec<String>) -> isize {
    let mut opts = Options::new();
    opts.optflag("h", "help", "print this help menu");
    opts.optopt("t", "threads", "number of worker threads to spawn on separate cores for threadtest", "THREADS");

    opts.optflag("", "vector", "run the test with a vector as the heap based data structure");
    opts.optflag("", "hashmap", "run the test with a hashmap as the heap based data structure");
    opts.optflag("", "btreemap", "run the test with a btreemap as the heap based data structure");
    opts.optflag("", "btreeset", "run the test with a btreeset as the heap based data structure");
    opts.optflag("", "qptrie", "run the test with a qp-trie as the heap based data structure");
    opts.optflag("", "threadtest", "run the threadtest heap benchmark");

    
    let matches = match opts.parse(&args) {
        Ok(m) => m,
        Err(_f) => {
            println!("{}", _f);
            print_usage(opts);
            return -1; 
        }
    };

    if matches.opt_present("h") {
        print_usage(opts);
        return 0;
    }

    if let Some(threads) = matches.opt_str("t").and_then(|i| i.parse::<usize>().ok()) {
        NTHREADS.store(threads, Ordering::SeqCst);
    }

	if !check_myrq() {
		println!("cannot run on a busy core (#{}). Pin me on an idle core.", CPU_ID!());
		return 0;
	}

    match rmain(matches) {
        Ok(_) => 0,
        Err(e) => {
            print_usage(opts);
            println!("Error: {}", e);
            -1
        }    
    } 
}

fn rmain(matches: Matches) -> Result<(), &'static str> {
    if matches.opt_present("vector") {
        do_vec();
    }
    else if matches.opt_present("hashmap") {
        do_hashmap();
    }
    else if matches.opt_present("btreemap") {
        do_btreemap();
    }
    else if matches.opt_present("btreeset") {
        do_btreeset();
    }
    else if matches.opt_present("qptrie") {
        do_qptrie();
    }
    else if matches.opt_present("threadtest") {
        do_threadtest()?;
    }
    else {
        return Err("Unknown command")
    }

    Ok(())
}


fn do_vec() {
    let tries = TRIES;
    let mut results: Vec<u64> = Vec::with_capacity(tries as usize);

    // // run tests for creating a vector with a certain capacity
    // for cap in &CAPACITY {
    //     for _ in 0..tries {
    //         results.push(create_vec_with_capacity(*cap));
    //     }

    //     println!("Create and drop a vector of capacity: {}", *cap);
    //     println!("Mean time: {} ns", results.iter().sum::<u64>() / results.len() as u64);
    //     println!("");

    //     results.clear();
    // }

    // run tests for creating an empty vector and adding items till it reaches a certain length
    for cap in &CAPACITY {
        for _ in 0..tries {
            results.push(create_vec_with_length(*cap));
        }

        println!("Create a vector, add elements till it reaches length = {}, and then drop", *cap);
        println!("Mean time: {} ns", results.iter().sum::<u64>() / results.len() as u64);
        println!("");

        results.clear();
    }
}

#[allow(dead_code)]
fn create_vec_with_capacity(cap: usize) -> u64 {
    let iterations = ITERATIONS;

    let start_hpet = get_hpet().as_ref().unwrap().get_counter();
    for _ in 0..iterations {
        let mut vec: Vec<u8> = Vec::with_capacity(cap);
        vec.push(255);
    }
    let end_hpet = get_hpet().as_ref().unwrap().get_counter();
    let time = hpet_2_ns(end_hpet - start_hpet) / iterations;

    if VERBOSE{ println!("mean time: {} ns", time); }

    time
}

fn create_vec_with_length(length: usize) -> u64 {
    let iterations = ITERATIONS;

    let start_hpet = get_hpet().as_ref().unwrap().get_counter();
    for _ in 0..iterations {
        let mut vec: Vec<u8> = Vec::new();
        for i in 0..length {
            vec.push(i as u8);
        }
    }
    let end_hpet = get_hpet().as_ref().unwrap().get_counter();
    let time = hpet_2_ns(end_hpet - start_hpet) / iterations;

    if VERBOSE{ println!("mean time: {} ns", time); }

    time
}




fn do_hashmap() {
    let tries = TRIES;

    let mut results: Vec<u64> = Vec::with_capacity(tries as usize);

    // // run tests to create a hashmap of a certain capacity 
    // for cap in &CAPACITY {
    //     for _ in 0..tries {
    //         results.push(create_hashmap_with_capacity(*cap));
    //     }

    //     println!("Create and drop a HashMap of capacity: {}", *cap);
    //     println!("Mean time: {} ns", results.iter().sum::<u64>() / results.len() as u64);
    //     println!("");

    //     results.clear();
    // }

    // run tests for creating an empty hashmap and adding items till it reaches a certain length
    for cap in &CAPACITY {
        for _ in 0..tries {
            results.push(create_hashmap_with_length(*cap));
        }

        println!("Create a hashmap, add elements till it reaches length = {}, and then drop", *cap);
        println!("Mean time: {} ns", results.iter().sum::<u64>() / results.len() as u64);
        println!("");

        results.clear();
    }

}

#[allow(dead_code)]
fn create_hashmap_with_capacity(cap: usize) -> u64 {
    let iterations = ITERATIONS;

    let start_hpet = get_hpet().as_ref().unwrap().get_counter();
    for _ in 0..iterations {
        let _vec: HashMap<usize, String> = HashMap::with_capacity(cap);
    }
    let end_hpet = get_hpet().as_ref().unwrap().get_counter();
    let time = hpet_2_ns(end_hpet - start_hpet) / iterations;

    if VERBOSE{ println!("mean time: {} ns", time); }    

    time
}

fn create_hashmap_with_length(length: usize) -> u64 {
    let iterations = ITERATIONS;

    let start_hpet = get_hpet().as_ref().unwrap().get_counter();
    for _ in 0..iterations {
        let mut vec: HashMap<usize, String> = HashMap::new();        
        for i in 0..length {
            vec.insert(i, String::from("hello"));
        }
    }
    let end_hpet = get_hpet().as_ref().unwrap().get_counter();
    let time = hpet_2_ns(end_hpet - start_hpet) / iterations;

    if VERBOSE{ println!("mean time: {} ns", time); }    

    time
}



fn do_btreemap() {
    let tries = TRIES;

    let mut results: Vec<u64> = Vec::with_capacity(tries as usize);

    // run tests for creating an empty btree map and adding items till it reaches a certain length
    for cap in &CAPACITY {
        for _ in 0..tries {
            results.push(create_btreemap_with_length(*cap));
        }

        println!("Create a btree map, add elements till it reaches length = {}, and then drop", *cap);
        println!("Mean time: {} ns", results.iter().sum::<u64>() / results.len() as u64);
        println!("");

        results.clear();
    }
}

fn create_btreemap_with_length(length: usize) -> u64 {
    let iterations = ITERATIONS;

    let start_hpet = get_hpet().as_ref().unwrap().get_counter();
    for _ in 0..iterations {
        let mut vec: BTreeMap<usize, String> = BTreeMap::new();        
        for i in 0..length {
            vec.insert(i, String::from("hello"));
        }
    }
    let end_hpet = get_hpet().as_ref().unwrap().get_counter();
    let time = hpet_2_ns(end_hpet - start_hpet) / iterations;

    if VERBOSE{ println!("mean time: {} ns", time); }    

    time
}



fn do_btreeset() {
    let tries = TRIES;

    let mut results: Vec<u64> = Vec::with_capacity(tries as usize);

    // run tests for creating an empty btree set and adding items till it reaches a certain length
    for cap in &CAPACITY {
        for _ in 0..tries {
            results.push(create_btreeset_with_length(*cap));
        }

        println!("Create a btree set, add elements till it reaches length = {}, and then drop", *cap);
        println!("Mean time: {} ns", results.iter().sum::<u64>() / results.len() as u64);
        println!("");

        results.clear();
    }
}

fn create_btreeset_with_length(length: usize) -> u64 {
    let iterations = ITERATIONS;

    let start_hpet = get_hpet().as_ref().unwrap().get_counter();
    for _ in 0..iterations {
        let mut vec: BTreeSet<usize> = BTreeSet::new();        
        for i in 0..length {
            vec.insert(i);
        }
    }
    let end_hpet = get_hpet().as_ref().unwrap().get_counter();
    let time = hpet_2_ns(end_hpet - start_hpet) / iterations;

    if VERBOSE{ println!("mean time: {} ns", time); }    

    time
}




fn do_qptrie() {
    let tries = TRIES;

    let mut results: Vec<u64> = Vec::with_capacity(tries as usize);

    // run tests for creating an empty qp trie and adding items till it reaches a certain length
    for cap in &CAPACITY {
        for _ in 0..tries {
            results.push(create_qptrie_with_length(*cap));
        }

        println!("Create a QP trie set, add elements till it reaches length = {}, and then drop", *cap);
        println!("Mean time: {} ns", results.iter().sum::<u64>() / results.len() as u64);
        println!("");

        results.clear();
    }
}

fn create_qptrie_with_length(length: usize) -> u64 {
    let iterations = ITERATIONS;

    let start_hpet = get_hpet().as_ref().unwrap().get_counter();
    for _ in 0..iterations {
        let mut vec: Trie<BString, usize> = Trie::new();        
        for i in 0..length {
            vec.insert_str(&i.to_string(), i);
        }
    }
    let end_hpet = get_hpet().as_ref().unwrap().get_counter();
    let time = hpet_2_ns(end_hpet - start_hpet) / iterations;

    if VERBOSE{ println!("mean time: {} ns", time); }    

    time
}


fn print_usage(opts: Options) {
    println!("{}", opts.usage(USAGE));
}

const USAGE: &'static str = "Usage: OPTION ARG";