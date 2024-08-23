<style>
    <?php include(locate_template("Module/Home/doctor_4_1_0/sass/doctor_4_1_0.min.css")); ?>
</style>

<section class="doctor_4_1_0">
	<div class="container">
		<div class="doctor_4_1_0__box">
			<div class="doctor_4_1_0__title">
				<?php echo $info = $field["title"]; ?>
			</div>
			<div class="slide_thumb3">
				<div id="slide_thumb3">
					<div class="slide_item">
						<div class="doctor_4_1_0__item row">
							<?php						
								$info = $field["info1"];

								foreach($info as $key => $value):
									$data = explode("\n", $value["info1_ct"]);

									if($key === 0) {
										echo '
											<div class="col-lg-6 doctor_4_1_0__text">
												<div class="doctor_4_1_0__name">
													'.$data[0].' <span>'.$data[1].'
												</div>
												<ul>
													'.$value["sub"].'
												</ul>
												<a href="'.$data[5].'" class="doctor_4_1_0__button">
													<span>
														<div class="doctor_4_1_0__more">Tìm hiểu thêm về bác sĩ</div>
													</span>
												</a>
											</div>
											<div class="col-lg-6 doctor_4_1_0__pic">
												<picture>
													<source media="(min-width:600px)" srcset="'.$data[2].'">
													<img width="556" height="480" src="'.$data[4].'" alt="'.$data[1].'">
												</picture>
											</div>
										';
									}
								endforeach;
							?>
						</div>
					</div>
				</div>

				<ul id="thumbnails_pc">
					<?php						
						foreach($info as $key => $value):
							$data = explode("\n", $value["info1_ct"]);
							if($key === 0) {
								$active = 'active';
							} else {
								$active = '';
							}
							echo '
								<li class="doctor_4_1_0__tab__item '.$active.'" data-id="'.$key.'">
									<div class="doctor_4_1_0__tabItem">
										<picture>
											<source media="(max-width:430px)" srcset="'.$data[6].'">
											<img width="127" height="129" src="'.$data[4].'" alt="'.$data[1].'" loading="lazy">
										</picture>
										<div class="doctor_4_1_0__info">
											<p>'.$data[0].' <br> <span>'.$data[1].'</span></p>
										</div>
									</div>
								</li>
							';
						endforeach;
					?> 
				</ul>
			</div>
		</div>
	</div>
</section>

<script>
    <?php include(locate_template("Module/Home/doctor_4_1_0/js/doctor_4_1_0.min.js")); ?>
</script>