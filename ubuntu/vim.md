`i` - insert mode (before cursor)
`a` - insert mode (after cursor)
`o` - insert mode line below
`I` - insert mode in the begining of the line
`A` - insert mode in the end of the line
`O` - insert mode line above

`v` - visual mode (for selecting)
`V` - visual line selecting mode

`Ctrl+v` - visual block mode

`Esc` - normal mode (leave insert mode)

`:w` - write changes into a file
`:wq` - write changes and quit the file

`number + ArrowUP` - go number lines up (works with "k")
`number + ArrowDown` - go number lines down (works with "j")

vim config file path - ~/.vimrc

`u` - undo in normal mode
`Ctrl + r` - redo in normal mode
> this commands can be combined with numbers

`yiw` - copy in a word

`d` - deletion
`D` - delete the rest of the line
`y` - copying
`Y` - copy full line
`p` - pasting (line - below/partial - after cursor)
`P` - pasting (line - above/partial - before cursor)
`dd` - delete line
`yy` - copy full line
`cc` - clear the line and enable insert mode
`c` (in visual mode) - clear selection and enable insert mode
`ciw` - change in a word
`C` - change rest of the line
`r` - replace single character

`w` - jump to the next word (space or spec char)
`W` - jump to the next space / spec char?
`b` - jump back as w
`B` - jump back as W
`e` - jump to the end of the word (before space)
`0` - go to begin of the line
`$` - go to end of the line

`dw` - delete word
`d2w` - delete 2 words
`diw` - delete in a word (when cursor placed in the middle of the word)

`ci"` - change in "
`di"` - delete in "
> can do this with brackets etc.

`%` (when focused on brackets etc.) - jumb between opend and closing bracket
`d%` - delete all between focused brackets including brackets

`t + sybmol` - go to position before symbol
`T` - backward
`f` + symbol - got to symbol position
`F` - backward

`gg` - go to begining of the file
`G` - go to the end of the file

`209G or :209+Enter` - go to line 209

======================================

47:45

`==` - indent line
`=` - indent selection
`/search` - find word search
`n` - go to next search matching
`N` - go to prev search matching

`#` - go up to the token
`*` - go down to the token

`ma` - mark point as "a"
`'a` - go to point marked as "a"

`zz` - center current line

`:s/textToReplace/textForReplace/g`
