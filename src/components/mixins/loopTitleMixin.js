var dot = ".";

function update(title) {
    if (dot.length == 5) dot = ".";
    dot += ".";
    title += dot;

    document.title = title;
}

export default {
    created() {
        var {
            loopTitle
        } = this.$options
        if (loopTitle) {
            setInterval(update, 500, loopTitle)
        }
    }
}