<?php
    /*PERSON 7.0.0*/
    'id_person_7_0_0' => array(
        'key' => 'id_person_7_0_0',
        'name' => 'person_7_0_0',
        'label' => 'Person 7.0.0',
        'display' => 'block',
        'sub_fields' => array(
            /*Bắt đầu field*/
            array(
                /* Tab tiêu đề*/
                'key' => 'id_person_7_0_0_tab3',
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
                'key' => 'id_person_7_0_0_tab3_layout1',
                'label' => 'Tiêu đề',
                'name' => 'img_title',
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
                'key' => 'id_person_7_0_0_tab1',
                'label' => 'Dịch vụ',
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
                'key' => 'id_person_7_0_0_tab1_sub1',
                'label' => 'Dịch vụ',
                'name' => 'person_info',
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
                        'key' => 'id_person_7_0_0_tab1_sub1_layout1',
                        'name' => 'person_info_box',
                        'label' => 'Dịch vụ',
                        'display' => 'block',
                        'sub_fields' => array(
                            // Bat dau Field
                            array(
                                'key' => 'id_person_7_0_0_tab1_sub1_layout1_sub2',
                                'label' => 'Tên dịch vụ',
                                'name' => 'name_dv',
                                'type' => 'textarea',
                                'instructions' => '
                                    Dòng 1 : Tên tiều đề nút <br>
                                    Dòng 2 : Link ảnh trắng (size 36px - 25px)
                                    Dòng 3 : Link ảnh xanh (size 36px - 25px)
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
                                'rows' => 3,
                                'new_lines' => '',
                            ),
                            array(
                                'key' => 'id_person_7_0_0_tab1_sub1_layout1_sub1',
                                'label' => 'Album ảnh',
                                'name' => 'photo_info1',
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
                                        'key' => 'id_person_7_0_0_tab1_sub1_layout1_sub1_box1',
                                        'name' => 'photo_info1_box',
                                        'label' => '2 ảnh',
                                        'display' => 'block',
                                        'sub_fields' => array(
                                            // Bat dau Field
                                            array(
                                                'key' => 'id_person_7_0_0_tab1_sub1_layout1_sub1_box1_tab1',
                                                'label' => 'Ảnh',
                                                'name' => 'photo_info2',
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
                                                        'key' => 'id_person_7_0_0_tab1_sub1_layout1_sub1_box1_tab1_layout1',
                                                        'name' => 'photo_info2_box',
                                                        'label' => 'Ảnh',
                                                        'display' => 'block',
                                                        'sub_fields' => array(
                                                            // Bat dau Field
                                                            array(
                                                                'key' => 'id_person_7_0_0_tab1_sub1_layout1_sub1_box1_tab1_layout1_sub1',
                                                                'label' => 'Link ảnh',
                                                                'name' => 'img_link',
                                                                'type' => 'textarea',
                                                                'instructions' => '
                                                                    Dòng 1 : Tên khách hàng <br>
                                                                    Dòng 2 : Nội dung khách hàng<br>
                                                                    Dòng 3 : Link ảnh khách hàng
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
                                                                'rows' => 3,
                                                                'new_lines' => '',
                                                            ),
                                                            // End Field Base                       
                                                        ),
                                                        'min' => '',
                                                        'max' => '',
                                                    ),
                                                ),
                                                'button_label' => 'Thêm ảnh',
                                                'min' => '',
                                                'max' => '',
                                            ),
                                            // End Field Base                       
                                        ),
                                        'min' => '',
                                        'max' => '',
                                    ),
                                ),
                                'button_label' => 'Thêm Album(2 ảnh)',
                                'min' => '',
                                'max' => '',
                            ),
                            
                            // End Field Base                       
                        ),
                        'min' => '',
                        'max' => '',
                    ),
                ),
                'button_label' => 'Thêm Dịch Vụ',
                'min' => '',
                'max' => '',
            ),

            /*End field*/
        ),
        'min' => '',
        'max' => '',
    ),
    /*END PERSON 7.0.0*/
?>