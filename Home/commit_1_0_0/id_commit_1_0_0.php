<?php
    /*commit 1.0.0*/
    'id_commit_1_0_0' => array(
        'key' => 'id_commit_1_0_0',
        'name' => 'commit_1_0_0',
        'label' => 'Commit 1.0.0',
        'display' => 'block',
        'sub_fields' => array(
            /*Bắt đầu field*/
            array(
                /* Tab tiêu đề*/
                'key' => 'id_commit_1_0_0_tab1',
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
                'key' => 'id_commit_1_0_0_tab1_sub1',
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
                /* Tab commit*/
                'key' => 'id_commit_1_0_0_tab2',
                'label' => 'Cam Kết Bảo Hành',
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
                'key' => 'id_commit_1_0_0_tab2_sub1',
                'label' => '',
                'name' => 'info1',
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
                        'key' => 'id_commit_1_0_0_tab2_sub1_layout1',
                        'name' => 'layout',
                        'label' => 'Thông tin',
                        'display' => 'block',
                        'sub_fields' => array(
                            // Bat dau Field
                            array(
                                'key' => 'id_commit_1_0_0_tab2_sub1_layout1_sub',
                                'label' => 'Nội dung',
                                'name' => 'content1',
                                'type' => 'textarea',
                                'instructions' => '
                                    Dòng 1: Link ảnh icon (104 x 100) <br>
                                    Dòng 2: Tiêu đề  <br>
                                    Dòng 3: CTA button <br>
                                    Dòng 4: Link đăng ký tư vấn <br>
                                    Dòng 5: Link ảnh nền
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
                                'rows' => 6,
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
            array(
                /* Tab commit*/
                'key' => 'id_commit_1_0_0_tab3',
                'label' => 'Form Đặt Lịch',
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
                'key' => 'id_commit_1_0_0_tab3_sub1',
                'label' => 'Tiêu đề liên hệ',
                'name' => 'contact_title',
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
                'key' => 'id_commit_1_0_0_tab3_sub2',
                'label' => '',
                'name' => 'contact_info',
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
                        'key' => 'id_commit_1_0_0_tab3_sub2_layout1',
                        'name' => 'contact_city',
                        'label' => 'Cơ sở',
                        'display' => 'block',
                        'sub_fields' => array(
                            // Bat dau Field
                            array(
                                'key' => 'id_commit_1_0_0_tab3_sub2_layout1_sub1',
                                'label' => 'Tên chi nhánh',
                                'name' => 'contact_city_name',
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
                                'key' => 'id_commit_1_0_0_tab3_sub2_layout1_sub2',
                                'label' => '',
                                'name' => 'contact_city_data',
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
                                        'key' => 'id_commit_1_0_0_tab3_sub2_layout1_sub2_layout1',
                                        'name' => 'contact_city_info',
                                        'label' => 'Thông tin',
                                        'display' => 'block',
                                        'sub_fields' => array(
                                            // Bat dau Field
                                            array(
                                                'key' => 'id_commit_1_0_0_tab3_sub2_layout1_sub2_layout1_sub',
                                                'label' => 'Nội dung',
                                                'name' => 'content',
                                                'type' => 'textarea',
                                                'instructions' => '
                                                    Dòng 1: Địa chỉ cụ thể của cơ sở <br>
                                                    Dòng 2: Link liên kết
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
                                                'rows' => 2,
                                                'new_lines' => '',
                                            ),
                                            // End Field Base						
                                        ),
                                        'min' => '',
                                        'max' => '',
                                    ),
                                ),
                                'button_label' => 'Thêm địa chỉ',
                                'min' => '',
                                'max' => '',
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
    /*END commit 1.0.0*/
?>