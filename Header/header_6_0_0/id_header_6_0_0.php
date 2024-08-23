<?php
   'id_header_6_0_0' => array(
    'key' => 'id_header_6_0_0',
    'name' => 'header_6_0_0',
    'label' => 'Header 6.0.0',
    'display' => 'block',
    'sub_fields' => array(
        array(
            'key' => 'id_slider_6_0_0_tab2',
            'label' => 'Cài Đặt Menu',
            'type' => 'tab',
        ),
        array(
            'key' => 'id_header_6_0_0_sub1',
            'label' => 'Menu',
            'name' => 'id_header_6_0_0_sub1',
            'type' => 'flexible_content',
            'layouts' => array(
                'id_header_6_0_0_sub1_layout1' => array(
                    'key' => 'id_header_6_0_0_sub1_layout1',
                    'name' => 'menu_don',
                    'label' => 'Menu Đơn',
                    'display' => 'row',
                    'sub_fields' => array(
                        array(
                            'key' => 'id_header_6_0_0_sub1_layout1_sub',
                            'label' => 'Tên Menu',
                            'name' => 'title',
                            'type' => 'textarea',
                            'instructions' => '
                                Dòng 1: Tên Menu <br>
                                Dòng 2: Link <br>
                            ',
                            'rows' => 3,
                        ),
                    ),
                ),
                'id_header_6_0_0_sub1_layout2' => array(
                    'key' => 'id_header_6_0_0_sub1_layout2',
                    'name' => 'menu_sub_full',
                    'label' => 'Mega Menu',
                    'display' => 'row',
                    'sub_fields' => array(
                        array(
                            'key' => 'id_header_6_0_0_sub1_layout2_sub1',
                            'label' => 'Menu cha',
                            'name' => 'title',
                            'type' => 'textarea',
                            'instructions' => '
                                Dòng 1 : Tên menu <br>
                                Dòng 2 : Link <br>
                            ',
                            'rows' => 2,
                        ),
                        array(
                            'key' => 'id_header_6_0_0_sub1_layout2_sub2',
                            'label' => 'Sub Menu',
                            'name' => 'col1',
                            'type' => 'wysiwyg',
                            'instructions' => 'Sử dụng groups UL>LI + Enter để tạo cột',
                            'tabs' => 'all',
                            'toolbar' => 'full',
                            'media_upload' => 1,
                            'delay' => 0,
                        ),
                    ),
                ),
            ),
            'button_label' => 'Thêm Menu',
            'min' => '',
            'max' => '',
        ),
    ),
),