<style>
    <?php include(locate_template("Module/Home/service_9_0_0/sass/service_9_0_0.min.css")); ?>
</style>

<section class="service_9_0_0">
    <div class="container">
        <div class="service_9_0_0__title">
            <?php echo $field["title"]; ?>
        </div>
        <div class="slide_service">
            <div id="slide_service"></div>

            <ul id="thumbnails_sv">
                <?php
                    foreach($field['info'] as $key => $value):
                    $data2= explode("\n",  $value['info_service_name']);
                        $key == 0 ? $current = 'active' : $current = '';
                       
                        echo '
                            <li class="service_9_0_0__tab__item '.$current.'" data-id="'.$key.'">
                                <a href="'.$data2[2].'" target="_blank">
                                    <div class="service_9_0_0__tabItem">
                                        <img width="149" height="149" src="'.$data2[0].'" alt="'.$data2[1].'" loading="lazy">
                                        <h2 class="service_9_0_0__name">
                                            <p>'.$data2[1].'</p>
                                        </h2>
                                    </div>
                                </a>
                            </li>
                        ';
                    endforeach; 
                ?>
            </ul>
        </div>
    </div>
</section>

<script>
    <?php include(locate_template("Module/Home/service_9_0_0/js/service_9_0_0.min.js")); ?>
</script>