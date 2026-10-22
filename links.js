/*
 * Reconstructed link configuration from the 2026-10-22 conversation.
 * IMPORTANT: Set status: 'active' only after its URL is verified.
 */
const LINKS = [
  {
    id: 'studio', title: 'WeThru Studio', subtitle: '직접 만든 작업과 작품을 모아둔 공간',
    icon: '01', url: null, status: 'pending', featured: true
    // Proposed future destination: https://studio.wethru.com/
  },
  {
    id: 'wethru', title: 'WeThru', subtitle: '우리가 하는 일과 서비스를 소개합니다',
    icon: 'W', url: 'https://wethru.com/', status: 'active'
  },
  {
    id: 'library', title: 'AI 자료실', subtitle: '직접 정리하고 공유하는 AI 활용 가이드',
    icon: 'AI', url: 'https://guides.wethru.com/', status: 'active'
  },
  {
    id: 'profile', title: 'WeThru Profile', subtitle: '사람과 사업을 한 링크로 소개하는 방법',
    icon: 'P', url: 'https://profile.wethru.com/', status: 'active'
  },
  {
    id: 'interior', title: 'WeThru Interior', subtitle: '공간·시공 업체를 위한 웹사이트 작업',
    icon: 'I', url: 'https://interior.wethru.com/', status: 'active'
  },
  {
    id: 'journal', title: '창업 기록', subtitle: '시도한 것, 배운 것, 바뀐 생각들',
    icon: 'N', url: null, status: 'pending'
  },
  {
    id: 'contact', title: '협업 문의', subtitle: '함께할 일이 있다면 편하게 연락주세요',
    icon: '↗', url: 'https://pf.kakao.com/_wRVBX/chat', status: 'active'
  }
];

function renderLinks() {
  const list = document.getElementById('link-list');
  if (!list) return;
  for (const item of LINKS) {
    const isActive = item.status === 'active' && /^https:\/\//.test(item.url || '');
    const card = document.createElement(isActive ? 'a' : 'div');
    card.className = 'link-card' + (item.featured ? ' featured' : '') + (isActive ? '' : ' pending');
    if (isActive) {
      card.href = item.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.setAttribute('aria-label', item.title + ' 새 탭에서 열기');
    } else {
      card.setAttribute('aria-label', item.title + ', 준비 중');
    }
    const icon = document.createElement('span'); icon.className='link-icon'; icon.textContent=item.icon;
    icon.setAttribute('aria-hidden','true');
    const body = document.createElement('span'); body.className='link-text';
    const heading = document.createElement('span'); heading.className='link-title';
    const title = document.createElement('span'); title.textContent=item.title; heading.append(title);
    if (!isActive) {
      const pill = document.createElement('span'); pill.className='pill'; pill.textContent='준비 중'; heading.append(pill);
    } else if (item.featured) {
      const pill = document.createElement('span'); pill.className='pill'; pill.textContent='FEATURED'; heading.append(pill);
    }
    const description = document.createElement('span'); description.className='link-desc'; description.textContent=item.subtitle;
    body.append(heading,description);
    const arrow = document.createElement('span'); arrow.className='link-arrow';
    arrow.textContent = isActive ? '↗' : '—'; arrow.setAttribute('aria-hidden','true');
    card.append(icon, body, arrow);
    list.append(card);
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}
renderLinks();
