# Here is my all note whatever I am learning in this repo

</br>
</br>

## Day 1

### MODULE

<ul>
<li>
Module is a set of function. ( Think about js libraries such us Math )
</li>

<li>
3 type of modules.
<ul>
<li>
Local Module. ( Own created modules )
</li>
<li>
Built-in Module. ( Node js own modules ) - http, url, path, fs ( no need to install )
</li>

<li>
External Module. ( Managed by NPM )
</li>
</ul>
</li>
</ul>

## Day 2

### FS Module - file system module

#### function/method of fs module

# async

<ol>
<li>
writeFile("file name", "file content", callback function) - we can create a file using this method!

```html
Note: if you have already created an account using this method and you try to
create another file using this method then this method over write you older file
when your new file name is same to you older file.
```

</li>
<li>
appendFile("file name", "file content", callback function) - we can append any content to our file using this method

```html
Note: if you have a file already and you want to add some new content to your
file you can do this using this " appenFile " method. This method appeded
content in your selected file.
```

</li>
<li>
readFile() - we can read anything using this method
</li>
<li>
rename() - we can rename anything using this method
</li>
<li>
Unlink() - we can delete any file using this method
</li>
<li>
Exists() - we can find is file or anything what you finding is here or not using this method
</li>
</ol>

# sync

<ol>
<li>
writeFileSync()
</li>
<li>
appendFileSync()
</li>
<li>
readFileSync()
</li>
<li>
renameSync()
</li>
<li>
UnlinkSync()
</li>
<li>
ExistsSync()
</li>
</ol>
