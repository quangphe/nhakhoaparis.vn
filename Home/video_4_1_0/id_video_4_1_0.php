<?php
   /*video 4.1.0*/
   'id_video_4_1_0' => array(
    'key' => 'id_video_4_1_0',
    'name' => 'video_4_1_0',
    'label' => 'Video 4.1.0',
    'display' => 'block',
    'sub_fields' => array(
        /*Bắt đầu field*/
        array(
            /* Tab tiêu đề*/
            'key' => 'id_video_4_1_0_tab1',
            'label' => 'Tiêu Đề',
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
            'key' => 'id_video_4_1_0_tab1_sub1',
            'label' => '',
            'name' => 'title',
            'type' => 'text',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
            'prepend' => '',
            'append' => '',
            'maxlength' => '',
        ),
        array(
            /* Tab video*/
            'key' => 'id_video_4_1_0_tab2',
            'label' => 'Danh Sách Thông tin',
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
            'key' => 'id_video_4_1_0_tab2_sub1',
            'label' => 'Video lớn',
            'name' => 'info1',
            'type' => 'textarea',
            'instructions' => '
                Dòng 1: Link ảnh hiển thị video lớn  (922 x 518)<br>
                Dòng 2: Tiêu đề video lớn <br>
                Dòng 3: Link youtube 

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
            'prepend' => '',
            'append' => '',
            'rows' => 3,
            'maxlength' => '',
        ),
        array(
            'key' => 'id_video_4_1_0_tab2_sub2',
            'label' => 'Video nhỏ',
            'name' => 'info2',
            'type' => 'flexible_content',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'layouts' => array(
                'layout_homeTitle' => array(
                    'key' => 'id_video_4_1_0_tab2_sub2_layout1',
                    'name' => 'person_layout',
                    'label' => 'Thông tin',
                    'display' => 'block',
                    'sub_fields' => array(
                        // Bat dau Field
                        array(
                            'key' => 'id_video_4_1_0_tab2_sub2_layout1_sub',
                            'label' => 'Nội dung',
                            'name' => 'content',
                            'type' => 'textarea',
                            'instructions' => '
                                Dòng 1: Linh ảnh hiển thị video nhỏ (200 x 112) <br>
                                Dòng 2: Tiêu đề video nhỏ <br>
                                Dòng 3: Link youtube 
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
                            'rows' => 4,
                            'new_lines' => '',
                        ),
                        // End Field Base						
                    ),
                    'min' => '',
                    'max' => '',
                ),
            ),
            'button_label' => 'Thêm Thông Tin',
            'min' => '',
            'max' => '',
        ),

        
        /*End field*/
    ),
    'min' => '',
    'max' => '',
),
/*END video 4.1.0*/
?>