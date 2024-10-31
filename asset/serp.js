(function() {
	var ref = document.referrer;
	if(!ref || !related_posts_container || 
		(ref.substring(0, 18) != 'http://www.google.')) 
		return;
	var container = document.getElementById(related_posts_container);
	if(!container || !ref.match(/[?|&]q=(.*?)&/g))
		return;

	var keyword = RegExp.$1, host = document.location.host;
	// callback function	
	search_related_posts = function(n, data) {
		if(!data.results)
			return;

		var res, content = [], 
			tpl = '<li><a href="$url" target="_blank">$title</a></li>';
		
		content.push('<ul class="related_posts_container">');	
		for(var i = 0, count = data.results.length; i< count; i++) {
			res = data.results[i];	
			content.push(tpl.replace(/\$url/g, res.unescapedUrl).replace(/\$title/g, res.title).replace(related_posts_title, '').replace('&laquo;', '').replace('-', ''));
		}
		content.push('</ul>');

		container.innerHTML+= content.join("\n");
		container.style.display = "block";
	};

	var key = ['site%3A', host, '%20', keyword].join(''), 
	//var key = keyword, // for testing
		api = ['http://www.google.com/uds/GwebSearch?callback=search_related_posts&context=0&rsz=large&hl=', related_posts_lang, '&v=1.0&q=', key].join(''),
		head = document.getElementsByTagName('head')[0], 
		js = document.createElement('script');

    js.setAttribute('src', api);
    head.appendChild(js);
})();
