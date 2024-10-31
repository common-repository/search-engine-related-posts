<?php
/*
Plugin Name: search engine related posts 
Plugin URI: http://www.ooso.net/index.php/archives/392
Description: When someone is referred from a search engine like Google, the plugin show your blog content matched the terms they search for.
Version: 1.2
Author: Volcano
Author URI: http://www.ooso.net
*/ 

// pls edit your container here
$related_posts_container 	= 'search_content';

// lang
$related_posts_lang			= 'en-US';
#$related_posts_lang			= 'zh-CN';

function search_related_posts_js() { /*{{{*/
	global $related_posts_container, $related_posts_lang;
?>

<script>
var related_posts_container = '<?php echo $related_posts_container?>',
	related_posts_title		= '<?php bloginfo('name')?>',
	related_posts_lang		= '<?php echo $related_posts_lang?>';
</script>
<script src="<?php bloginfo('wpurl')?>/wp-content/plugins/search-engine-related-posts/asset/serp-min.js"></script>
<?php
}/*}}}*/

add_action('wp_footer', 'search_related_posts_js');
