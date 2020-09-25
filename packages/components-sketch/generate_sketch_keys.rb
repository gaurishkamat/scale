#!/usr/bin/env ruby

USAGE = <<EOF
Generates data-sketch-key attributes for a file.

USAGE: generate_sketch_keys.rb filename tag

Example:
    ./generate_sketch_keys views/textarea.hbs scale-input
    
    Now views/textarea.hbs <scale-input> tags have turned into <scale-input data-sketch-key="textarea-N"
    where N is a running number starting from 0.
EOF

filename = ARGV[0]
tag = ARGV[1]

if ARGV.length != 2
    STDERR.puts(USAGE)
    exit(1)
end

if not File.exists?(filename)
    STDERR.puts("File not found: #{filename}")
    exit(2)
end

ext = File.extname(filename)
filename_prefix = File.basename(filename)[0...-ext.size]

i = 0
content = File.read(filename)
    .gsub(/ ?data-sketch-key="[^"]*"/, '')
    .gsub(/<#{tag}/) {|m| 
        replacement = %Q(<#{tag} data-sketch-key="#{filename_prefix}-#{i}") 
        i += 1
        replacement
    }
File.write(filename, content)
