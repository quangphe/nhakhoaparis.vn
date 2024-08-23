<style>
    <?php include(locate_template("Module/Home/news_13_0_0/sass/news_13_0_0.min.css")); ?>
</style>

<section class="news_13_0_0">
    <div class="container">
        <div class="news_13_0_0__title">
            <?php echo $field["news_title1"]; ?>
        </div>
        <div class="news_13_0_0__box">
            <div class="news_13_0_0__box1">
            <?php
                    foreach($field["content1"] as $key => $post):
                    setup_postdata($post);
                    $link = get_permalink();
                    $title = get_the_title();
                    $img = get_the_post_thumbnail_url();
                    // $excerpt = wp_trim_words( get_the_excerpt(), 100 );
                    // $excerpt =  get_the_excerpt();
                    $excerpt = wp_trim_words( get_the_excerpt(), 130 );
                    $admin = get_the_author();
                    $time = get_the_date('d/m/Y');
                        if($key == 0):
                            echo'
                                <a href="'. $link.'">
                                    <div class="news_13_0_0__pic">
                                        <img width="559" height="335" src="'.$img.'" alt="'. $title.'" loading="lazy">
                                    </div>
                                    <div class="news_13_0_0__ct">
                                        <h3 class="news_13_0_0__titlePost">'. $title.'</h3>
                                        <p class="news_13_0_0__time">Bác sĩ nha khoa - '.$time.'</p>
                                        <p>'.$excerpt.'</p>
                                    </div>
                                </a>
                            ';
                        endif;
                    endforeach;
                    wp_reset_postdata(); 
                ?>
                
            </div>
            <div class="news_13_0_0__box2">
                <?php
                    $args = array(
                        'post_status' => 'publish',
                        'showposts' => 6,
                        'cat' => 1,
                    );
                    
                    $getposts = new WP_query($args); 
                    global $wp_query; $wp_query->in_the_loop = true; 
                    while ($getposts->have_posts()) : $getposts->the_post();     
                        echo'
                            <a href="'.get_permalink($post->ID).'" class="news_13_0_0__box2__item">
                                <div class="news_13_0_0__box2__pic">
                                    <img width="274" height="143"
                                        src="'.get_the_post_thumbnail_url($post->ID).'" alt="'.get_the_title($post->ID).'"
                                        loading="lazy">
                                </div>
                                <div class="news_13_0_0__box2__ct">
                                    <h3 class="news_13_0_0__box2__title">'.get_the_title($post->ID).'</h3>
                                </div>
                            </a>
                        ';
                    endwhile; 
                    wp_reset_postdata();
                ?>
            </div>
        </div>
    </div>
</section>