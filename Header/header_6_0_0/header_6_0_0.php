<style>
    <?php 
        include(locate_template("Module/Header/header_6_0_0/sass/header_6_0_0.min.css"));
    ?>
</style>
<header class="header_6_0_0" id="header_6_0_0__main">
    <div class="header_6_0_0__box">
        <div class="header_6_0_0__boxTop">
            <div class="header_6_0_0__newLabel">
                Hệ thống chuỗi nha khoa tiêu chuẩn Pháp đầu tiên tại Việt Nam
            </div>
        </div>
        <div class="header_6_0_0__box1">
            <div class="container">
                <div class="header_6_0_0__box1Main">
                    <div class="header_6_0_0__box1Left">
                        <?php
                            if ( is_page_template( 'templates/page_home_v2.php' ) ) {
                                $div = 'h1';
                            } else {
                                $div = 'div';
                            }
                            echo '
                                <'.$div.' class="header_6_0_0__box1Logo">
                                    <a href="/">
                                        <img width="120" height="59" src="https://nhakhoaparis.vn/wp-content/themes/ParisBrand2024/Module/Header/header_6_0_0/images/logo.webp"
                                            alt="Nha Khoa Paris – Hệ thống Nha Khoa Tiêu Chuẩn Pháp đầu tiên Việt Nam">
                                    </a>
                                </'.$div.'>
                            ';
                        ?>
                    </div>
                    <div class="header_6_0_0__box1Right">
                        <div class="header_6_0_0__box1Address">
                            <ul>
                                <li>Mở cửa từ 8h - 18h</li>
                                <li>
                                    <b>Từ T2 - CN</b>
                                </li>
                            </ul>
                        </div>
                        <div class="header_6_0_0__box1Call popup_caller">
                            <ul>
                                <li>Tư vấn miễn phí</li>
                                <li>
                                    <b>1900.6900</b>
                                </li>
                            </ul>
                        </div>
                        <div class="header_6_0_0__box1Regtv btnnktv">
                            Đặt lịch hẹn
                        </div>
                        <div class="header_6_0_0__box1Search">
                            <button class="header_6_0_0__box1Button modal-btn" data-modal="search">
                                <img src="https://nhakhoaparis.vn/wp-content/themes/ParisBrand2024/Module/Header/header_6_0_0/images/search.webp" alt="icon search">
                            </button>
                        </div>
                    </div>
                    <div class="header_6_0_0__iconMid siteHeaderNav" id="toggle"><i class="icon-menu"></i>≡</div>
                </div>
            </div>
        </div>
        <div class="header_6_0_0__box2" id="headerMenu">
            <div class="container">
                <div class="header_6_0_0__box2Main">
                    <a href="/" class="header_6_0_0__box2__logosb">
                        <img src="https://nhakhoaparis.vn/wp-content/themes/ParisBrand2024/Module/Header/header_6_0_0/images/logo.webp" alt="Nha Khoa Paris">
                    </a>
                    <ul class="header_6_0_0__box2__menu" id="header_6_0_0__box2__menu">
                        <?php
                            foreach( $field as $key2 => $value): 
                                foreach( $value as $key3 => $list):
                                    $main_tt = explode("\n",  $list["title"]);
                                    if( $list['acf_fc_layout'] == 'menu_don' ):
                                        echo '
                                            <li class="header_6_0_0__box2__menuSub">
                                                <a href="'.$main_tt[1].'" class="header_6_0_0__box2__title arr">'.$main_tt[0].'</a>
                                            </li>
                                        ';
                                    elseif( $list['acf_fc_layout'] == 'menu_sub' ):
                                        echo '';
                                    elseif ( $list['acf_fc_layout'] == 'menu_sub_full' ):
                                        $main_tt = explode("\n",  $list["title"]);
                                        $main_ct = explode("&nbsp;",  $list["col1"]);
                                        echo '
                                            <li class="header_6_0_0__box2__menuSub">
                                                <a href="'.$main_tt[1].'" class="header_6_0_0__box2__title arr">'.$main_tt[0].'</a>
                                                <i class="icon-plus menu-icon" id="icon-plus">+</i>
                                            </li>
                                        ';
                                    endif;
                                endforeach;
                            endforeach;
                        ?>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header_6_0_0__box3" id="menu-bg"></div>
    </div>
</header>
<script>
    <?php include(locate_template('Module/Header/header_6_0_0/js/header_6_0_0.min.js')); ?>
</script>