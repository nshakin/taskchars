// Lightens a hex based color code and returns new color
function shadeColor(color, percent) {
    var f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

// Class for creating new icons
function TaskIcon(color, charEntity, opt_iconClass, opt_iconWidth) {
    // default argument values
    opt_iconClass = (typeof opt_iconClass == 'undefined' ? 'char-icon' : opt_iconClass);
    opt_iconWidth = (typeof opt_iconWidth == 'undefined' ? '30px' : opt_iconWidth);

    // object properties
    this.color = color;
    this.text = charEntity;
    this.bgColor = shadeColor(this.color, .8);

    // buildHTML method
    this.buildIconHTML = function() {
        // Icon container HTML
        var html = document.createElement('span');
            html.className = opt_iconClass;
        var style = html.style;
            style.background = this.bgColor;
            style.color = this.color;
            style.fontFamily = 'Verdana';
            style.fontWeight = 'bold';
            style.textAlign = 'center';

        // Opening bracket HTML
        var open = document.createElement('span');
            open.className = 'char-icon-bracket';
            open.innerHTML = '&lbrack;';
        html.appendChild(open);

        // Icon text HTML
        var icon = document.createElement('span')
            icon.className = 'char-icon-text'
            icon.style.display = 'inline-block';
            icon.style.width = opt_iconWidth;
            icon.innerHTML = charEntity;
        html.appendChild(icon);

        // Closing bracket html
        var close = document.createElement('span');
            close.className = 'char-icon-bracket';
            close.innerHTML = '&rbrack;';
        html.appendChild(close);

        // set iconHTML with javascript icon object
        return html.outerHTML;
    }
}

// Premade set of icons for use with task lists
function TaskIconSet() {
    return {
        complete: new TaskIcon('#2ecc71', '&check;').buildIconHTML,
        empty: new TaskIcon('#95a5a6', '&nbsp;').buildIconHTML,
        help: new TaskIcon('#9b59b6', '&quest;').buildIconHTML,
        incomplete: new Task('#e74c3c', '&cross;').buildIconHTML,
        info: new TaskIcon('#3498db', '&iukcy;').buildIconHTML,
        starred: new TaskIcon('#e67e22', '&bigstar;').buildIconHTML,
        warning: new TaskIcon('#f1c40f', '&excl;').buildIconHTML
    }
}
