<style>
    <?php include(locate_template("Module/Home/about_5_0_0/sass/about_5_0_0.min.css")); ?>
</style>

<section class="about_5_0_0">
    <div class="container"></div>
    <div class="about_5_0_0__title">
        <?php echo $field["title"]?>
    </div>
    <div class="about_5_0_0__slide">
        <img width="1920" height="691" src="<?php echo $path ?>/images/img-slide.webp" alt="" loading="lazy">
    </div>
    <div class="about_5_0_0__box">
        <ul class="about_5_0_0__tabs">
            <?php
                $rows2 = $field["info_img_thumb"];
                foreach($rows2 as $row3):
                    $img2 = $row3["img2"];
                    $des2 = $row3['sub2'];
                
                    echo '
                        <li class="about_5_0_0__tabItem">
                            <div class="about_5_0_0__pic">
                                <img width="188" height="188" src="'.$img2.'" alt="'.$des2.'" loading="lazy">
                            </div>
                            <p>'.$des2.'</p>
                        </li>
                    ';
                endforeach;
            ?>
        </ul>
    </div>
</section>