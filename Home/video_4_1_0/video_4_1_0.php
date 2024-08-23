<style>
    <?php include(locate_template("Module/Home/video_4_1_0/sass/video_4_1_0.min.css")); ?>
</style>

<section class="video_4_1_0">
	<div class="container">
		<div class="video_4_1_0__title">
			<?php echo $field["title"]; ?>
		</div>
		<div class="row">
			<div class="video_4_1_0__box1 col-lg-8" id="video-container">
				<?php
					$info = explode("\n", $field['info1']) ;
					$linkID = getIDvideo($info[2]);
					$linkID = substr($linkID, 0,-1);
					echo '
						<a rel="noffollow" class="modal-clip" data-video="'.$linkID.'" data-modal="modal-clip">
							<div class="video_4_1_0__box1__item">
								<div class="video_4_1_0__pic">
									<img width="750" height="421" src="'.$info[0].'" alt="'.$info[1].'" loading="lazy">
								</div>
								<div class="video_4_1_0__text">
									<div class="video_4_1_0__ttVideo">'.$info[1].'</div>
									<span>Lượt xem: '.$info[3].'</span>
								</div>
							</div>
						</a>
					';
				?>
			</div>
			<div class="video_4_1_0__box2 col-lg-4">
				<div class="scrollbar" id="style-1">
					<div class="force-overflow" id="force-overflow">
						<?php
							foreach($field['info2'] as $key => $value):
								$data = explode("\n",  $value['content']);
								$linkID = getIDvideo($data[2]);
								echo '
									<div class="video_4_1_0__itemBox2">
										<a rel="noffollow" class="modal-clip" data-video="'.$linkID.'" data-modal="modal-clip">
											<div class="video_4_1_0__itemBox2__pic">
												<img width="200" height="112" src="'.$data[0].'" alt="'.$data[1].'" loading="lazy">
											</div>
											<div class="video_4_1_0__itemBox2__content">
												<p>'.$data[1].'</p>
												<span>Lượt xem: '.$data[3].'</span>
											</div>
										</a>
									</div>
								';
							endforeach;
						?>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>