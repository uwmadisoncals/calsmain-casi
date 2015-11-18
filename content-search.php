<?php
/**
 * The template used for displaying page content in page.php
 * @package WordPress
 * @subpackage CALSv1
 * @since CALS 1.0
 */
?>
<?php edit_post_link( __( 'Edit', 'twentyeleven' ), '<span class="edit-link">', '</span>' ); ?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	
	 <?php	if ( has_post_thumbnail() ) { ?>
		 					<div class="featuredImage">
		    					<?php echo get_the_post_thumbnail($page->ID, 'large'); ?>
		    					
		 					</div>
						<?php } ?>
	<header class="entry-header">
		
		<h1 class="entry-title">
			<?php 
			$rimg = (string)$post->cse_img;
			
			
			if (strpos($rimg,'blank') !== false) { ?>
				<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
				
			<?php } else if(strpos($rimg,'raw') !== false) { ?>
				<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
				
			<?php } else if(strpos($rimg,'') !== false) { ?>
				<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		<?php } else { ?>
		
		<img class="searchResultImg" style="max-width: 100px; max-height: 100px; float: left; margin-right: 12px; margin-bottom: 12px;" src="<?php echo $post->cse_img ?>"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		
				
		<?php } ?>
			
			</h1>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_excerpt(); ?>
		<div style="font-weight: bold;"><?php echo $post->guid ?></div>
		<?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'twentyeleven' ) . '</span>', 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->
	<footer class="entry-meta">
		
	</footer><!-- .entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->
