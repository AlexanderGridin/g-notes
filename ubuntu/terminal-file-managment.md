## File managment operations

`ls` - list files

`ls -l` - list files with files details

`ls -a` - list files with hidden files

`cd [path]` - change directory

`rm [fileName]` - remove file/files

`rmdir [emptyDirectoryName]` - remove empty directory

`rm -r [folderName]` - delete the folder and subfolders, even if it is non-empty

`mv [fileName] [newPlace]` - move file. Also by this command we can move folders. The `mv` command doesn't have an `-R` flag, it moves folders recursively

`cp [fileName] [targetPlace]` - copy file

`mkdir [folderName]` - create new folder

`touch [fileName]` - create new empty file

`touch [fileName1] [fileName2] [fileNameN]` - create multiple new empty files

## Change file permissions
`chmod` - command to change file permission

### Available roles

- `u` - user
- `g` - group
- `o` - other

### Some permissions

- `r` - read permission
- `w` - write permission
- `x` - execute permission

`+` - for adding permission

`-` - for removing permission

### Examples

`chmod u+x abc.txt` - give to user the execute permission 

`chmod u+r,g+x abc.txt` - give multiple permissions

`chmod u-rx abc.txt` - remove permissions
