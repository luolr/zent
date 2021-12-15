---
order: 10
zh-CN:
	title: 公告
	content1: 有赞联合QQ百家扶持计划，帮你触达
	content2: 亿月活的全新流量
	number: 6
en-US:
	title: Banner
	content1: Youzan and QQ Hundreds of Support Programs will help you reach new traffic of 
	content2: million monthly livelihoods
	number: 600
---

```jsx
import { Banner } from 'zent';

const IMG = 'https://img01.yzcdn.cn/upload_files/2021/11/25/FtAGwcqfZIngtd1uXYIuIND58IeU.png';

ReactDOM.render(
	<div className="zent-alert-example">
		<Banner 
			backgroundImage={IMG} 
			closeIconColor='white'
		>
			<div className="zent-alert-example-banner">
				{i18n.content1}
				<span className="zent-alert-example-banner-highlight">{i18n.number}</span>
				{i18n.content2}
			</div>
		</Banner>
	</div>,
	mountNode
);
```

<style>
.zent-alert-example-banner {
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	line-height: 24px;
}
.zent-alert-example-banner-highlight {
	color: #FFDD5D;
	font-weight: 400;
	font-size: 28px;
	margin: 0 2px;
	vertical-align: middle;
}
</style>