// notes and practice code involving the path module of node

const path = require('path');

/**
 * path.basename(path[, ext])
 * - returns the last portion of a path. optional second argument is a string to filter out the extension.
 * 
 * path.dirname(path)
 * - returns the directory name of a path.
 * - operating system agnostic
 * - useful in deploying applications that need to know the working directory
 * 
 * path.extname(path)
 * - returns the extension of the path.
 * 
 * path.format(pathObject)
 * - returns a path string from an object.
 * 
 * 
 * path.isAbsolute(path)
 * - returns true if the path is absolute.
 * 
 * path.join([path1][, path2][, ...])
 * - joins all arguments together and normalizes the resulting path.
 * 
 * path.normalize(path)
 * - normalizes the path. 
 * 
 * path.parse(path)
 * - returns an object from a path string.
 * 
 * path.relative(from, to)
 * - returns a relative path from from to to.
 * 
 * path.resolve([from ...], to)
 * - resolves to to to an absolute path.
 */

// reporting the current working directory
console.log(path.resolve());

