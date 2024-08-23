<style>
    <?php include(locate_template("Module/Home/person_7_0_0/sass/person_7_0_0.min.css")); ?>
</style>

<?php
	$data = $field['person_info'][0]['photo_info1'][0]['photo_info2'][0]['img_link'];
	$data = explode("\n", $data);
?>	

<section class="person_7_0_0">
	<div class="container img-bg">
		<div class="person_7_0_0__title">
			<?php echo $field["img_title"]; ?>
		</div>
		<div class="person_7_0_0__box">
			<div class="person_7_0_0__thumb">
				<ul class="tabs__person" id="person_7_0_0_thumbnails">
					<?php
						foreach($field['person_info'] as $key => $value):
							$name_dv =explode("\n",$value['name_dv']) ;
							$key == 0 ? $active = 'active' : $active = '';							
							echo '
								<li class="person_7_0_0__tab__item '.$active.'" data-id="'.$key.'">
									<span>'.$name_dv[0].'</span>
									<img class="icon-white" width="52" height="36" src="'.$name_dv[1].'" alt="icon niềng răng" loading="lazy">
									<img class="icon-black" width="52" height="36" src="'.$name_dv[2].'" alt="icon niềng răng" loading="lazy">
								</li>
							';
						endforeach;
					?>
				</ul>
			</div>
									
			<div class="slide_person">
				<div id="slide_person">
					<div class="slide_item">
						<div class="person_7_0_0__item">
							<div class="person_7_0_0__itemChild">
								<img width="555" height="280" src="<?php echo $data[2] ?>" alt="<?php echo $data[0] ?>" loading="lazy">
								<div class="person_7_0_0__info">
									<p class="person_7_0_0__name"><?php echo $data[0] ?></p>
									<p class="person_7_0_0__sv"><?php echo $data[1] ?></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<script>
    <?php include(locate_template("Module/Home/person_7_0_0/js/person_7_0_0.min.js")); ?>
</script>