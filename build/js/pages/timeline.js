Vue.component('site-timeline', {
    props: [ 'timeline' ],
    template: `<div class="timeline-wrapper"><div class="timeline-content" v-for="(item, index) in timeline" :key="index"><div class="timeline-meta"><div class="timeline-head"><small><time :datetime="item.date" :title="item.date" class="timeline-data">{{ item.date }}</time></small><strong class="timeline-title">{{ item.title }}</strong></div><div class="timeline-tag" :class="item.tag">{{ item.tag }}</div></div><p class="timeline-desc">{{ item.desc }}</p><p v-if="item.linkUrl" class="timeline-more"><a :href="item.linkUrl" :title="item.linkText" target="_blank" rel="noopener noreferrer">{{ item.linkText }}</a></p><div class="timeline-bg-white"></div><div class="timeline-dots"></div></div></div>`,
});