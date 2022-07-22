(function() {var implementors = {};
implementors["device_manager"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"struct\" href=\"device_manager/struct.FatFsIoErrorAdapter.html\" title=\"struct device_manager::FatFsIoErrorAdapter\">FatFsIoErrorAdapter</a>","synthetic":false,"types":["device_manager::FatFsIoErrorAdapter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"device_manager/struct.FatFsIoErrorAdapter.html\" title=\"struct device_manager::FatFsIoErrorAdapter\">FatFsIoErrorAdapter</a>&gt; for Error","synthetic":false,"types":["core2::io::error::Error"]}];
implementors["framebuffer"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"color/struct.Color.html\" title=\"struct color::Color\">Color</a>&gt; for <a class=\"struct\" href=\"framebuffer/pixel/struct.RGBPixel.html\" title=\"struct framebuffer::pixel::RGBPixel\">RGBPixel</a>","synthetic":false,"types":["framebuffer::pixel::RGBPixel"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"color/struct.Color.html\" title=\"struct color::Color\">Color</a>&gt; for <a class=\"struct\" href=\"framebuffer/pixel/struct.AlphaPixel.html\" title=\"struct framebuffer::pixel::AlphaPixel\">AlphaPixel</a>","synthetic":false,"types":["framebuffer::pixel::AlphaPixel"]}];
implementors["io"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"io/enum.IoError.html\" title=\"enum io::IoError\">IoError</a>&gt; for Error","synthetic":false,"types":["core2::io::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"io/enum.IoError.html\" title=\"enum io::IoError\">IoError</a>","synthetic":false,"types":["io::IoError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"io/enum.IoError.html\" title=\"enum io::IoError\">IoError</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"io/enum.IoError.html\" title=\"enum io::IoError\">IoError</a>&gt; for &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>","synthetic":false,"types":[]},{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;R&gt; for <a class=\"struct\" href=\"io/struct.ByteReaderWrapper.html\" title=\"struct io::ByteReaderWrapper\">ByteReaderWrapper</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"io/trait.BlockReader.html\" title=\"trait io::BlockReader\">BlockReader</a>,&nbsp;</span>","synthetic":false,"types":["io::ByteReaderWrapper"]},{"text":"impl&lt;RW&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RW&gt; for <a class=\"struct\" href=\"io/struct.ByteReaderWriterWrapper.html\" title=\"struct io::ByteReaderWriterWrapper\">ByteReaderWriterWrapper</a>&lt;RW&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RW: <a class=\"trait\" href=\"io/trait.BlockReader.html\" title=\"trait io::BlockReader\">BlockReader</a> + <a class=\"trait\" href=\"io/trait.BlockWriter.html\" title=\"trait io::BlockWriter\">BlockWriter</a>,&nbsp;</span>","synthetic":false,"types":["io::ByteReaderWriterWrapper"]},{"text":"impl&lt;RW&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RW&gt; for <a class=\"struct\" href=\"io/struct.ByteWriterWrapper.html\" title=\"struct io::ByteWriterWrapper\">ByteWriterWrapper</a>&lt;RW&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RW: <a class=\"trait\" href=\"io/trait.BlockReader.html\" title=\"trait io::BlockReader\">BlockReader</a> + <a class=\"trait\" href=\"io/trait.BlockWriter.html\" title=\"trait io::BlockWriter\">BlockWriter</a>,&nbsp;</span>","synthetic":false,"types":["io::ByteWriterWrapper"]},{"text":"impl&lt;'io, IO, L, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;B&gt; for <a class=\"struct\" href=\"io/struct.LockableIo.html\" title=\"struct io::LockableIo\">LockableIo</a>&lt;'io, IO, L, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: 'io + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: for&lt;'a&gt; <a class=\"trait\" href=\"lockable/trait.Lockable.html\" title=\"trait lockable::Lockable\">Lockable</a>&lt;'a, IO&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;L&gt;,&nbsp;</span>","synthetic":false,"types":["io::LockableIo"]}];
implementors["mlx_ethernet"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mlx_ethernet/command_queue/enum.CommandQueueError.html\" title=\"enum mlx_ethernet::command_queue::CommandQueueError\">CommandQueueError</a>&gt; for &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>","synthetic":false,"types":[]}];
implementors["path"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"path/struct.Path.html\" title=\"struct path::Path\">Path</a>","synthetic":false,"types":["path::Path"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"path/struct.Path.html\" title=\"struct path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]}];
implementors["percent_encoding"] = [{"text":"impl&lt;'a, E:&nbsp;<a class=\"trait\" href=\"percent_encoding/trait.EncodeSet.html\" title=\"trait percent_encoding::EncodeSet\">EncodeSet</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"percent_encoding/struct.PercentEncode.html\" title=\"struct percent_encoding::PercentEncode\">PercentEncode</a>&lt;'a, E&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.str.html\">str</a>&gt;","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"percent_encoding/struct.PercentDecode.html\" title=\"struct percent_encoding::PercentDecode\">PercentDecode</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>]&gt;","synthetic":false,"types":["alloc::borrow::Cow"]}];
implementors["signal_handler"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a>&gt; for <a class=\"enum\" href=\"signal_handler/enum.ErrorCode.html\" title=\"enum signal_handler::ErrorCode\">ErrorCode</a>","synthetic":false,"types":["signal_handler::ErrorCode"]}];
implementors["task"] = [{"text":"impl&lt;'p&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/panic/panic_info/struct.PanicInfo.html\" title=\"struct core::panic::panic_info::PanicInfo\">PanicInfo</a>&lt;'p&gt;&gt; for <a class=\"struct\" href=\"task/struct.PanicInfoOwned.html\" title=\"struct task::PanicInfoOwned\">PanicInfoOwned</a>","synthetic":false,"types":["task::PanicInfoOwned"]}];
implementors["text_terminal"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"text_terminal/enum.Color.html\" title=\"enum text_terminal::Color\">Color</a>","synthetic":false,"types":["text_terminal::ansi_colors::Color"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"text_terminal/enum.Color.html\" title=\"enum text_terminal::Color\">Color</a>&gt; for <a class=\"struct\" href=\"text_terminal/struct.ForegroundColor.html\" title=\"struct text_terminal::ForegroundColor\">ForegroundColor</a>","synthetic":false,"types":["text_terminal::ansi_colors::ForegroundColor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"text_terminal/enum.Color.html\" title=\"enum text_terminal::Color\">Color</a>&gt; for <a class=\"struct\" href=\"text_terminal/struct.BackgroundColor.html\" title=\"struct text_terminal::BackgroundColor\">BackgroundColor</a>","synthetic":false,"types":["text_terminal::ansi_colors::BackgroundColor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"text_terminal/enum.Color.html\" title=\"enum text_terminal::Color\">Color</a>&gt; for <a class=\"struct\" href=\"text_terminal/struct.UnderlinedColor.html\" title=\"struct text_terminal::UnderlinedColor\">UnderlinedColor</a>","synthetic":false,"types":["text_terminal::ansi_colors::UnderlinedColor"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()