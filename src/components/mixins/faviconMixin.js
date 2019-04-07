export default {
	mounted() {
		var { favicon } = this.$options;
		if (favicon) {
			var fav = document.createElement('link');
			fav.rel = 'icon';
			fav.type = 'image/x-icon';
			fav.href = `favicons/${favicon}`;
			document.getElementsByTagName('head')[0].prepend(fav);
		}
	}
};
