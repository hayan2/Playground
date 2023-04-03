import '../App.css'
import React, { useEffect, useState } from 'react';
import palgongImg from '../image/palgong.jpg'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';



function Detail() {
	const [defineOpen, setDefineOpen] = useState(true);
	const [originOpen, setOriginOpen] = useState(true);
	const [openedOpen, setOpenedOpen] = useState(true);
	const [naturalOpen, setNaturalOpen] = useState(true);

	let [fade, setFade] = useState('');

	const alertClicked = () => {

	};

	return (
		<div style={{ fontFamily: "Noto Sans KR" }}>
			<div className="contents-container">
				<div className="contents-detail-snb">
					<ListGroup className='snb-container'>
						<ListGroup.Item disabled className='snb-title'>목차</ListGroup.Item>
						<ListGroup.Item action onClick={alertClicked} className='snb-list' href='#define'>정의</ListGroup.Item>
						<ListGroup.Item action onClick={alertClicked} className='snb-list' href='#opened'>개설</ListGroup.Item>
						<ListGroup.Item action onClick={alertClicked} className='snb-list' href='#origin'>명칭 유래</ListGroup.Item>
						<ListGroup.Item action onClick={alertClicked} className='snb-list' href='#natural'>자연환경</ListGroup.Item>
					</ListGroup>
				</div>

				<div className='contents-detail-contents'>
					<hr></hr>
					<div className="detail-section">
						<div className="detail-meta">
							<div className="meta-image-wrap">
								<img src={ palgongImg }></img>
								<div className="meta-caption" style={{ fontSize: "13px" }}>
									▴ 팔공산임
								</div>
							</div>

							<div className="meta-contents-wrap">
								<div className='meta-head'>
									<div className="category-wrap">
										<Button variant="primary" size="sm" style={{ marginRight: "0.4rem" }}>
											<a href="https://encykorea.aks.ac.kr/Article/E0032729">
												신녕면
											</a>
										</Button>
										<Button variant="secondary" size="sm">
											<a href="https://efw.nfm.go.kr/service/book/text/107?groupId=1&refer_id=125">
												부계면
											</a>
										</Button>

									</div>
									<div className="meta-title">
										대구광역시 동구와 경상북도 영천시 신녕면 및 군위군 부계면, 칠곡군, 경산시에 걸쳐 있는 산.
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr></hr>

					<div className="detail-section">
						<div className="section-head">
							<div className='section-title'>
								<Button
									onClick={() => setDefineOpen(!defineOpen)}
									aria-controls="example-fade-text"
									aria-expanded={defineOpen}
									style={{
										color: "black",
										background: "white",
										borderColor: "lightgray",
									}}
								>
									⇕
								</Button>
								<a id="define">&nbsp;&nbsp;정의</a>
							</div>
						</div>
						<div className="section-body">
							<div className="text-detail">
								<Fade in={defineOpen}>
									<div>
										대구광역시 동구와 경상북도 영천시 신녕면 및 군위군 부계면, 칠곡군, 경산시에 걸쳐 있는 산.
									</div>
								</Fade>

							</div>
						</div>
					</div>
					<hr></hr>

					<div className="detail-section">
						<div className="section-head">
							<div className='section-title'>
								<Button
									onClick={() => setOpenedOpen(!openedOpen)}
									aria-controls="example-fade-text"
									aria-expanded={openedOpen}
									style={{
										color: "black",
										background: "white",
										borderColor: "lightgray",
									}}
								>
									⇕
								</Button>
								<a id="opened">&nbsp;&nbsp;개설</a>
							</div>
						</div>
						<div className="section-body">
							<div className="text-detail">
								<Fade in={openedOpen}>
									<div>
										팔공산(1,192.3m)은 태백산맥의 보현산(普賢山, 1,124m)에서 서남쪽으로 연결된 산이다.
										최고봉인 비로봉을 중심으로 동봉(東峰)과 서봉(西峰)이 양 날개를 펴고 있는 모습으로 솟아 있다.
										팔공산을 중심으로 대구광역시와 경상북도의 경계에 형성된 환상(環狀)의 산지는 이른바 팔공산맥이라고 하는데,
										이것은 대구분지의 북부를 병풍처럼 가리고 있다.<br></br><br></br>

										산맥은 남동쪽의 초례봉(醮禮峰, 648m)에서 시작하여 환성산(環城山, 811m)·인봉(印峰, 887m)·
										팔공산을 거쳐 북서부의 가산(架山, 902m)에 이른다. 인봉에서 가산까지는 팔공산맥의 주형으로 길이가 약 20㎞이다.
									</div>
								</Fade>

							</div>
						</div>
					</div>
					<hr></hr>
					<div className="detail-section">
						<div className="section-head">
							<div className='section-title'>
								<Button
									onClick={() => setOriginOpen(!originOpen)}
									aria-controls="example-fade-text"
									aria-expanded={originOpen}
									style={{
										color: "black",
										background: "white",
										borderColor: "lightgray",
									}}
								>
									⇕
								</Button>
								<a id="origin">&nbsp;&nbsp;명칭 유래</a>
							</div>
						</div>
						<div className="section-body">
							<div className="text-detail">
								<Fade in={originOpen}>
									<div>
										팔공산의 옛 이름은 공산·부악(父岳)이었고, 『신증동국여지승람(新增東國輿地勝覽)』에는 “중악(中岳)에 비겨 중사(中祠)하였다.”라고 기록되어 있다.<br></br><br></br>

										후삼국시대 견훤(甄萱)이 서라벌을 공략할 때에 고려 태조가 5,000명의 군사를 거느리고 후백제군을 정벌하러 나섰다가 공산(公山) 동수(桐藪)에서
										견훤을 만나 포위를 당하였다. 그 때 신숭겸(申崇謙)이 태조로 가장하여 수레를 타고 적진에 뛰어들어 전사함으로써 태조가 겨우 목숨을 구하였다고 한다.
										당시에 신숭겸과 김락(金樂) 등 8명의 장수가 모두 전사하여 팔공산이라 부르게 되었다고 한다. 이외에도 팔공산 유래에 대해서는 중국 안휘성(安徽省)의
										팔공산 지명 차용설 등 몇 가지 설이 있다.
									</div>
								</Fade>

							</div>
						</div>
					</div>
					<hr></hr>
					<div className="detail-section">
						<div className="section-head">
							<div className='section-title'>
								<Button
									onClick={() => setNaturalOpen(!naturalOpen)}
									aria-controls="example-fade-text"
									aria-expanded={naturalOpen}
									style={{
										color: "black",
										background: "white",
										borderColor: "lightgray",
									}}
								>
									⇕
								</Button>
								<a id="natural">&nbsp;&nbsp;자연환경</a>
							</div>
						</div>
						<div className="section-body">
							<div className="text-detail">
								<Fade in={naturalOpen} >
									<div>
										팔공산은 전체 배열이 주변의 구릉지와는 달리 종상의 산형을 이루고 있다.
										지질은 주변에 넓게 분포한 경상누층군(慶尙累層郡)에 불국사화강암(佛國寺花岡岩)이
										관입하여 돔(dome) 지형을 형성하였다. 그 뒤 침식작용으로 상부의 퇴적암은 제거되고 그 밑의
										화강암이 노출되어 현재와 같은 모습을 띠게 되었다. <br></br><br></br>

										팔공산의 북쪽에는 위천(渭川)의 상류인 남천(南川)과 여러 계류(溪流)가 흐르고,
										동쪽에는 한천(漢川)과 신령천(新寧川) 등이 흐른다. 산의 남쪽은 완만하여 응해산(鷹蟹山, 526m)·
										응봉(456m) 등의 구릉성 산지가 솟아 있고, 그 사이사이에 하천이 남류하여 동화천(桐華川)에 모인 후,
										금호강(琴湖江)으로 흘러든다.<br></br><br></br>

										팔공산에는 조류 24종, 포유류 14종, 식물 118과 464속 858종 4아종 193변종 25품종이 분포하는 것으로 조사되어 있다.
									</div>
								</Fade>
							</div>
						</div>
					</div>
					<hr></hr>



				</div>

			</div>


		</div>
	)
}

export default Detail