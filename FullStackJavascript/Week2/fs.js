// notes on and practice code involving the fs module of node

const fs = require('fs');

// fs has a huge number of methods that are used to interact with the file system.
// all fs methods are asynchronous. 
// they can be made synchronous by adding Sync to the end of the method name.

// fs methods:
// fs.access(path[, mode], callback) - checks if a file exists and is accessible.
// fs.appendFile(file, data[, options], callback) - appends data to a file.
// fs.chmod(path, mode, callback) - changes the permissions of a file.
// fs.chown(path, uid, gid, callback) - changes the owner of a file.
// fs.close(fd, callback) - closes a file descriptor.
// fs.copyFile(src, dest, callback) - copies a file from src to dest.
// fs.createReadStream(path[, options]) - returns a readable stream for a file.
// fs.createWriteStream(path[, options]) - returns a writable stream for a file.
// fs.exists(path, callback) - checks if a path exists.
// fs.link(srcpath, dstpath, callback) - creates a hard link to a file.
//fs.mkdir(path[, mode], callback) - creates a directory.
// fs.mkdtemp(prefix, callback) - creates a unique temporary directory.
// fs.open(path, flags[, mode], callback) - sets the file mode
// fs.read(fd, buffer, offset, length, position, callback) - reads data from a file.
// fs.readdir(path[, options], callback) - reads a directory.
// fs.readFile(file[, options], callback) - reads a file.
// fs.readlink(path[, options], callback) - reads a symbolic link.
// fs.realpath(path[, options], callback) - returns the canonical path of the file.
// fs.rename(oldPath, newPath, callback) - renames a file or directory.
// fs.rmdir(path, callback) - removes a directory.
// fs.stat(path, callback) - returns the file status.
// fs.symlink(srcpath, dstpath, type, callback) - creates a symbolic link.
// fs.truncate(path, len, callback) - truncates a file to a specified length.
// fs.unlink(path, callback) - deletes a file.
// fs.utimes(path, atime, mtime, callback) - changes the access and modification times of a file.
// fs.write(fd, buffer, offset, length, position, callback) - writes data to a file.
// fs.writeFile(file, data[, options], callback) - writes data to a file.
// fs.writeSync(fd, buffer, offset, length, position) - writes data to a file.
// fs.unwatchFile(filename[, listener]) - unwatches a file.
// fs.watch(filename[, options][, listener]) - watches a file.
// fs.watchFile(filename[, options], listener) - watches a file.

