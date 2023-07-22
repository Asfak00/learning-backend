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

`Note: if you have already created an account using this method and you try to
create another file using this method then this method over write you older file
when your new file name is same to you older file.`

</li>
<li>
appendFile("file name", "file content", callback function) - we can append any content to our file using this method

`Note: if you have a file already and you want to add some new content to your
file you can do this using this " appenFile " method. This method appeded
content in your selected file.`

</li>
<li>
readFile("file name", "utf-8", "callback function - this function (err,data) received ) - we can read file content using this method

`Note: Why we are use "utf-8"? it is an coding system. if you not use this you
will not read you currect data. And the callback function have error and data
perameter, we can access those perameter.`

</li>
<li>
rename("current file name", "update file name", callback Function) - we can rename our exsiting file name using this method
</li>
<li>
Unlink("file name", callback function) - we can delete our selected file using this method
</li>
<li>
Exists("file name", callback function) - we can find is our file here or not using this method
</li>
</ol>

# sync

> the difference between async and sync is just callback function. When we use fs module we can use async method and we also use sync method from fs module. When we use async method in the fs module we will define a callback function in our method, but when we will use sync method we cann't use callback function in our fs sync method.

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
