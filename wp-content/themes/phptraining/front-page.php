<?php
/**
 * The front-page.php template file.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package phptraining
 */

get_header(); ?>

<div id="primary" class="content-area" style="max-width: 600px; margin: 0 auto;">
	<main id="main" class="site-main" role="main">
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<form class="" action="" method="post">
				<div class="row">
					<div class="column">
						<h2>Age Verifcation</h2>
					</div>
				</div>
				<div class="row">
					<?php echo do_shortcode('[verify-age]'); ?>
				</div>
				<div class="row">
					<div class="medium-5 column">
						<input type="submit" name="name" value="Go" class="button expand">
					</div>
				</div>
			</form>
		<?php endwhile; ?>
			<!-- post navigation -->
		<?php else: ?>
			<!-- no posts found -->
		<?php endif; ?>
	</main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>
