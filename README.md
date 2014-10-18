# taskchars
**taskchars** is a simple Javascript utility for creating HTML character entity based icons including a default set of icons specifically made for task/todo lists.

<br>
## Installation
Include **taskchars** in the head section of your HTML document:

`<script type="text/javascript" src="taskchars.js"></script>`

<br>
## Task Icons

### Usage
Simply call the `TaskIcons` object to return an HTML string containing the formatted icon:

`TaskIcons.complete; // [ ✓ ]`

<br>
### Available Icons
<span class="char-icon" style="color: rgb(46, 204, 113); font-family: Verdana; font-weight: bold; text-align: center; margin: 0px 7px; background: rgb(213, 245, 227);"><span class="char-icon-bracket">[</span><span class="char-icon-text" style="display: inline-block; width: 30px;">✓</span><span class="char-icon-bracket">]</span></span> `TaskIcons.complete;`

<span class="char-icon" style="color: rgb(149, 165, 166); font-family: Verdana; font-weight: bold; text-align: center; margin: 0px 7px; background: rgb(234, 237, 237);"><span class="char-icon-bracket">[</span><span class="char-icon-text" style="display: inline-block; width: 30px;">&nbsp;</span><span class="char-icon-bracket">]</span></span> `TaskIcons.empty;`

<span class="char-icon" style="color: rgb(155, 89, 182); font-family: Verdana; font-weight: bold; text-align: center; margin: 0px 7px; background: rgb(235, 222, 240);"><span class="char-icon-bracket">[</span><span class="char-icon-text" style="display: inline-block; width: 30px;">?</span><span class="char-icon-bracket">]</span></span> `TaskIcons.help;`

<span class="char-icon" style="color: rgb(231, 76, 60); font-family: Verdana; font-weight: bold; text-align: center; margin: 0px 7px; background: rgb(250, 219, 216);"><span class="char-icon-bracket">[</span><span class="char-icon-text" style="display: inline-block; width: 30px;">✗</span><span class="char-icon-bracket">]</span></span> `TaskIcons.incomplete;`

<span class="char-icon" style="color: rgb(52, 152, 219); font-family: Verdana; font-weight: bold; text-align: center; margin: 0px 7px; background: rgb(214, 234, 248);"><span class="char-icon-bracket">[</span><span class="char-icon-text" style="display: inline-block; width: 30px;">і</span><span class="char-icon-bracket">]</span></span> `TaskIcons.info;`

<span class="char-icon" style="color: rgb(230, 126, 34); font-family: Verdana; font-weight: bold; text-align: center; margin: 0px 7px; background: rgb(250, 229, 211);"><span class="char-icon-bracket">[</span><span class="char-icon-text" style="display: inline-block; width: 30px;">★</span><span class="char-icon-bracket">]</span></span> `TaskIcons.starred;`

<span class="char-icon" style="color: rgb(241, 196, 15); font-family: Verdana; font-weight: bold; text-align: center; margin: 0px 7px; background: rgb(252, 243, 207);"><span class="char-icon-bracket">[</span><span class="char-icon-text" style="display: inline-block; width: 30px;">!</span><span class="char-icon-bracket">]</span></span> `TaskIcons.warning;`

<br>
## Custom Icons
Creating icons is simple as well.  

### Custom Icon
Create a new instance of the `TaskIcon` object.  The first parameter is the icon's color and the second is the html string to use for the icon:

`var icon = new TaskIcon( '#000', '+' ).buildIconHTML();` *outputs:*
<span class="char-icon" style="color: rgb(0, 0, 0); font-family: Verdana; font-weight: bold; text-align: center; margin: 0px 7px; background: rgb(204, 204, 204);"><span class="char-icon-bracket">[</span><span class="char-icon-text" style="display: inline-block; width: 30px;">+</span><span class="char-icon-bracket">]</span></span>

### Custom Icon (with additional options)
2 additional values you can edit for the new icon include the class name and the width:

`var icon = new TaskIcon( '#000', '~', 'new-class', 80 ).buildIconHTML();` *outputs:*
<span class="new-class" style="color: rgb(0, 0, 0); font-family: Verdana; font-weight: bold; text-align: center; margin: 0px 7px; background: rgb(204, 204, 204);"><span class="char-icon-bracket">[</span><span class="char-icon-text" style="display: inline-block; width: 80px;">~</span><span class="char-icon-bracket">]</span></span>

<br>
## About
This script serves as my first venture into using both Git for source control and Github as an web-based gallery for my various projects.  I also specifically made this script to help create an icon library suitable for use within Google App Scripts without having to import images and do a lot of extra unnecessary work.  

If you like the script or have any comments or suggestions, feel free to contact me.
