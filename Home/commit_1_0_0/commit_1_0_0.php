<style>
    <?php include(locate_template("Module/Home/commit_1_0_0/sass/commit_1_0_0.min.css")); ?>
</style>

<section class="commit_1_0_0">
	<div class="container">
		<div class="row">
			<div class="col-lg-8">
				<div class="commit_1_0_0__title">
					<?php echo $field["title"]; ?>
				</div>
				<div class="commit_1_0_0__box1">
					<ul class="commit_1_0_0__box1__tabs" id="commit_1_0_0__box1__tabs">
						<?php
							foreach($field['info1'] as $key => $value):
								$content = explode("\n",$value['content1']) ;
								$key == 0 ? $active = 'active' : $active = '';							
					
								echo '
									<li class="tab '.$active.'" data-id="'.$key.'"
										style="background-image: url(\''.$content[3].'\')">
										<img width="104" height="100" src="'.$content[0].'" alt="'.$content[1].'" loading="lazy">
										<div class="commit_1_0_0__box1__tabsTitle">'.$content[1].'</div>
									</li>
								';
							endforeach;
						?>
					</ul>
				</div>
				<div id="commit_1_0_0__box2" class="commit_1_0_0__box2">
					<div class="commit_1_0_0__box2__subTitle mb">
						Liên hệ chuyên gia tư vấn miễn phí
					</div>
					<a href="#" class="commit_1_0_0__box2__more mb popup_regist btnnktv">
						<span>
							<b>Đăng ký tư vấn</b>
						</span>
					</a>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="commit_1_0_0__box3">
					<div class="commit_1_0_0__box3__tt">
						<?php echo $field["contact_title"]; ?>
					</div>
					<select name="" id="select-box" class="commit_1_0_0__box3__select">
						<?php
							foreach($field['contact_info'] as $key => $value):
								$city = $value['contact_city_name'] ;
								echo '
									<option value="'.$city.'">
										'.$city.'
									</option>
								';
							endforeach;
						?>
					</select>
					<div class="commit_1_0_0__box3__list" id="commit_1_0_0__box3__list">
						<div class="commit_1_0_0__box3__item">
							<div class="scrollbar" id="style-11">
								<div class="force-overflow" id="commit_1_0_0__box3__item">

								</div>
							</div>
						</div>
					</div>
					<form class="commit_1_0_0__box3__form" id="commit_1_0_0__box3__form">
						<article>
							<div style="display:none">
								<input name="email" type="textbox" value="">
								<input name="iemail" value="no@email.com" type="textbox" placeholder="Email:">
								<input id="gclid_field" name="referred" value="">
								<input name="code_campaign" value="558803148">
								<input name="name_campaign" value="[Paris] Hẹn lịch tư vấn">
								<input name="first_link" value="">
								<input name="website" value="">
								<input name="location" value="">
								<textarea type="hidden" name="itext" value="Hẹn lịch tư vấn" placeholder="Nhu cầu tư vấn"></textarea>
							</div>
							<div class="form-group">
								<input id="iname" name="iname" type="text" placeholder="*Họ Tên:">
								<div class="form-message"></div>
							</div>
							<div class="form-group">
								<input id="imob" name="imob" type="text" placeholder="*Số Điện Thoại:">
								<div class="form-message"></div>
							</div>
							<div class="dkbt">
								<input type="submit" value="hẹn lịch tư vấn">
							</div>
						</article>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
<script>
    <?php include(locate_template("Module/Home/commit_1_0_0/js/commit_1_0_0.min.js")); ?>
</script>