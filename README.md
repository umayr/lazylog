# lazylog
Quick change log for lazy asses.

## Usage

To install lazylog from npm, run:

```
$ npm install -g lazylog
```

```
$ lazylog --help

     Usage: lazylog [options]
    
      Options:
    
         -h, --help             output usage information
         -V, --version          output the version number
         -n, --number <number>  number of commits
         -r, --regex <regex>    regex to filter log
         -S, --since <since>    fetch commits from given date
         -A, --author <author>  fetch commits by given author
         -m, --messages         show complete messages of filtered commits

```

## Example

![Lazylog Example](http://i.imgur.com/87hh5H8.png "Lazylog Example")

## TODOs

- ~~Support for multiple Regular Expressions.~~ One could simply write a complex regex, no? 
- ~~Support to filter given author's commits.~~ Done. ;3
- ~~Output to changelog.txt file.~~ YAY!!
- More options for writing a change log. (Markdown, maybe? Suggestions!!)
- Appending change log functionality, right now; it just overwrites the current one.
