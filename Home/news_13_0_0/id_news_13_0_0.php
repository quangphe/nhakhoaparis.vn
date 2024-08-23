<?php
    /*NEWS 10.1.0*/
    'id_news_10_1_0' => array(
        'key' => 'id_news_10_1_0',
        'name' => 'news_10_1_0',
        'label' => 'News 10.1.0',
        'display' => 'block',
        'sub_fields' => array(
            /*Bắt đầu field*/
            
            // TAB TIN TỨC
            array(
                'key' => 'id_news_10_1_0_tab2',
                'label' => 'Tin Tức',
                'name' => '',
                'type' => 'tab',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'placement' => 'top',
                'endpoint' => 0,
            ),
            array(
                'key' => 'id_news_10_1_0_tab2_sub1',
                'label' => 'Tiêu đề',
                'name' => 'info',
                'type' => 'text',
                'instructions' => '
                ',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'placeholder' => '',
                'maxlength' => '',
                'rows' => 1,
                'new_lines' => '',
            ),
            array(
                'key' => 'id_news_10_1_0_tab2_sub2',
                'label' => 'Danh sách tin',
                'name' => 'content1',
                'type' => 'relationship',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'post_type' => '',
                'taxonomy' => '',
                'filters' => array(
                    0 => 'search',
                    1 => 'post_type',
                    2 => 'taxonomy',
                ),
                'elements' => array(
                    0 => 'featured_image',
                ),
                'min' => '',
                'max' => 4,
                'return_format' => 'id',
            ),
            // END TAB TIN TỨC
            
            /*End field*/
        ),
        'min' => '',
        'max' => '1',
    ),
    /*END NEWS 10.1.0*/
?>