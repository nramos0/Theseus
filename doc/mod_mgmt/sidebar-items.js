window.SIDEBAR_ITEMS = {"constant":[["BSS_SECTION_NAME",""],["CRATE_HASH_DELIMITER","A crate’s name and its hash are separated by “-”, i.e., “my_crate-hash”."],["DATA_BSS_SECTION_FLAGS","`.data` and `.bss` sections are read-write and non-executable."],["DATA_SECTION_NAME",""],["EH_FRAME_SECTION_NAME",""],["EXTRA_FILES_DIRECTORY_NAME","The name of the directory that contains all other “extra_files” contents."],["GCC_EXCEPT_TABLE_SECTION_NAME",""],["MODULE_PREFIX_DELIMITER","The Theseus Makefile appends prefixes onto bootloader module names, which are separated by the “#” character.  For example, “k#my_crate-hash.o”."],["NAMESPACES_DIRECTORY_NAME","The name of the directory that contains all of the CrateNamespace files."],["RODATA_SECTION_FLAGS","`.rodata` sections are read-only and non-executable."],["RODATA_SECTION_NAME",""],["SECTION_HASH_DELIMITER","A section’s demangled name and its hash are separated by “::h”,  e.g., “my_crate::section_name::h”."],["TEXT_SECTION_FLAGS","`.text` sections are read-only and executable."],["TEXT_SECTION_NAME",""],["TLS_BSS_SECTION_NAME",""],["TLS_DATA_SECTION_NAME",""]],"enum":[["CrateType","The type of a crate, based on its object file naming convention. This naming convention is only used for crate object files that come from bootloader-provided modules, which the Theseus makefile assigns at build time."],["IntoCrateObjectFile","A type that can be converted into a crate object file."],["SectionType","The possible types of sections that can be loaded from a crate object file."]],"fn":[["crate_name_from_path","Returns the crate name that is derived from a crate object file path."],["create_application_namespace","Create a new application `CrateNamespace` that uses the default application directory  and is structured atop the given `recursive_namespace`.  If no `recursive_namespace` is provided, the default initial kernel namespace will be used. "],["find_symbol_table","Returns a reference to the symbol table in the given `ElfFile`."],["get_containing_crate_name","Parses the given symbol string to try to find the name of the parent crate that contains the symbol.  Depending on the symbol, there may be multiple potential parent crates; if so, they are returned in order of likeliness:  the first crate name in the symbol is most likely to contain it. If the parent crate cannot be determined (e.g., a `no_mangle` symbol), then an empty `Vec` is returned."],["get_initial_kernel_namespace","Returns a reference to the default kernel namespace,  which must exist because it contains the initially-loaded kernel crates.  Returns None if the default namespace hasn’t yet been initialized."],["get_namespaces_directory","Returns the top-level directory that contains all of the namespaces. "],["init","Initializes the module management system based on the bootloader-provided modules,  and creates and returns the default `CrateNamespace` for kernel crates."],["replace_containing_crate_name","Replaces the `old_crate_name` substring in the given `demangled_full_symbol` with the given `new_crate_name`,  if it can be found, and if the parent crate name matches the `old_crate_name`.  If the parent crate name can be found but does not match the expected `old_crate_name`, then None is returned."],["write_relocation","Write an actual relocation entry."]],"mod":[["parse_nano_core","Routines for parsing the `nano_core`, the fully-linked, already-loaded base kernel image, in other words, the code that is currently executing. As such, it performs no loading, but rather just creates metadata that represents the existing kernel code that was loaded by the bootloader, and adds those functions to the system map."],["replace_nano_core_crates","Routines for replacing the crates that comprise the `nano_core`, i.e., the base kernel image. "],["serde","Serializable versions of crate and section metadata types."]],"struct":[["AppCrateRef","An application crate that has been loaded into a `CrateNamespace`."],["CrateNamespace","This struct represents a namespace of crates and their “global” (publicly-visible) symbols. A crate namespace struct is basically a container around many crates  that have all been loaded and linked against each other,  completely separate and in isolation from any other crate namespace  (although a given crate may be shared across multiple namespaces)."],["LoadedCrate","Represents a single crate whose object file has been  loaded and linked into at least one `CrateNamespace`."],["LoadedSection","Represents a section that has been loaded and is part of a `LoadedCrate`. The containing `SectionType` enum determines which type of section it is."],["LoadedSectionInner","The parts of a `LoadedSection` that may be mutable, i.e.,  only the parts that could change after a section is initially loaded and linked."],["NamespaceDir","A wrapper around a `Directory` reference that offers special convenience functions for getting and inserting crate object files into a directory."],["RelocationEntry","The information necessary to calculate and write a relocation value, based on a source section and a target section, in which a value  based on the location of the source section is written somwhere in the target section."],["StrRef","A wrapper around an `Arc<str>`: an immutable shared reference to a string slice."],["StrongDependency","A representation that the owner `A` of (a `LoadedSection` object containing) this struct depends on the given `section` `B` in this struct. The dependent section `A` is not specifically included here; since it’s the owner of this struct, it’s implicit that it’s the dependent one."],["TlsDataImage","An initialized TLS area data image ready to be used by a new task."],["WeakDependent","A representation that the `section` `A` in this struct depends on the owner `B` of (the `LoadedSection` object containing) this struct.  The target dependency `B` is not specifically included here;  it’s implicitly the owner of this struct."]],"type":[["Shndx","A Section Header iNDeX (SHNDX), as specified by the ELF format.  Even though this is typically encoded as a `u16`, its decoded form can exceed the max size of `u16`."],["StrongCrateRef","A Strong reference to a [`LoadedCrate`]."],["StrongSectionRef","A Strong reference ([`Arc`]) to a [`LoadedSection`]."],["SymbolMap","A “symbol map” from a fully-qualified demangled symbol String to weak reference to a `LoadedSection`. This is used for relocations, and for looking up function names."],["WeakCrateRef","A Weak reference to a [`LoadedCrate`]."],["WeakSectionRef","A Weak reference ([`Weak`]) to a [`LoadedSection`]."]]};