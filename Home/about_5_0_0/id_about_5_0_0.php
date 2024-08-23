<?php
    /*SERVICE 9.0.0*/
    'id_service_9_0_0' => array(
        'key' => 'id_service_9_0_0',
        'name' => 'service_9_0_0',
        'label' => 'Service 9.0.0',
        'display' => 'block',
        'sub_fields' => array(
            /*Bắt đầu field*/
            array(
                /* Tab tiêu đề*/
                'key' => 'id_service_9_0_0_tab1',
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
                'key' => 'id_service_9_0_0_tab1_sub1',
                'label' => 'Tên tiêu đề',
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
                /* Tab service*/
                'key' => 'id_service_9_0_0_tab2',
                'label' => 'Dịch Vụ Tại Nha Khoa Paris',
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
                'key' => 'id_service_9_0_0_tab2_sub1',
                'label' => '',
                'name' => 'info',
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
                        'key' => 'id_service_9_0_0_tab2_sub1_layout1',
                        'name' => 'info_service',
                        'label' => 'Dịch vụ',
                        'display' => 'block',
                        'sub_fields' => array(
                            // Bat dau Field
                            array(
                                'key' => 'id_service_9_0_0_tab2_sub1_layout1_sub1',
                                'label' => 'Ảnh thumb dịch vụ',
                                'name' => 'info_service_name',
                                'type' => 'text',
                                'instructions' => '
                                    Link ảnh
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
                                'rows' => 1,
                                'maxlength' => '',
                            ),
                            array(
                                'key' => 'id_service_9_0_0_tab2_sub1_layout1_sub2',
                                'label' => '',
                                'name' => 'info_service_data',
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
                                        'key' => 'id_service_9_0_0_tab2_sub1_layout1_sub2_layout1',
                                        'name' => 'info_service_ct',
                                        'label' => 'Thông tin',
                                        'display' => 'block',
                                        'sub_fields' => array(
                                            // Bat dau Field
                                            array(
                                                'key' => 'id_service_9_0_0_tab1_sub2_layout1_sub2_layout1_sub',
                                                'label' => 'Nội dung',
                                                'name' => 'content',
                                                'type' => 'textarea',
                                                'instructions' => '
                                                    Dòng 1: Link ảnh dịch vụ <br>
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
                                'button_label' => 'Thêm dịch vụ',
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
    /*END SERVICE 9.0.0*/
?>