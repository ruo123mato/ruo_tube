// サンプルデータ
const videosData = [
    {
        id: 1,
        title: 'JavaScriptの基礎を学ぶ',
        channelId: 1,
        channel: 'プログラミング講座',
        views: '125K',
        uploadedDate: '2024年1月15日',
        thumbnail: 'https://via.placeholder.com/320x180/FF6B6B/FFFFFF?text=JavaScript',
        duration: 1200
    },
    {
        id: 2,
        title: 'Reactでリアルタイム値段表示アプリを作成',
        channelId: 2,
        channel: 'ウェブ開発ラボ',
        views: '89K',
        uploadedDate: '2024年1月20日',
        thumbnail: 'https://via.placeholder.com/320x180/4ECDC4/FFFFFF?text=React',
        duration: 1800
    },
    {
        id: 3,
        title: 'CSS グリッドレイアウト完全ガイド',
        channelId: 1,
        channel: 'プログラミング講座',
        views: '234K',
        uploadedDate: '2024年1月25日',
        thumbnail: 'https://via.placeholder.com/320x180/95E1D3/FFFFFF?text=CSS',
        duration: 900
    },
    {
        id: 4,
        title: 'Node.jsで高速バックエンド構築',
        channelId: 3,
        channel: 'バックエンド開発',
        views: '156K',
        uploadedDate: '2024年2月1日',
        thumbnail: 'https://via.placeholder.com/320x180/F38181/FFFFFF?text=Node.js',
        duration: 2400
    },
    {
        id: 5,
        title: 'TypeScriptで型安全なコードを書く',
        channelId: 2,
        channel: 'ウェブ開発ラボ',
        views: '92K',
        uploadedDate: '2024年2月5日',
        thumbnail: 'https://via.placeholder.com/320x180/AA96DA/FFFFFF?text=TypeScript',
        duration: 1500
    },
    {
        id: 6,
        title: 'データベース設計の最適な方法',
        channelId: 3,
        channel: 'バックエンド開発',
        views: '178K',
        uploadedDate: '2024年2月10日',
        thumbnail: 'https://via.placeholder.com/320x180/FCBAD3/FFFFFF?text=Database',
        duration: 2100
    },
    {
        id: 7,
        title: 'モダンJavaScript ES2024の新機能',
        channelId: 1,
        channel: 'プログラミング講座',
        views: '310K',
        uploadedDate: '2024年2月15日',
        thumbnail: 'https://via.placeholder.com/320x180/A8D8EA/FFFFFF?text=ES2024',
        duration: 1350
    },
    {
        id: 8,
        title: 'Pythonでデータ分析',
        channelId: 4,
        channel: 'データ科学チャンネル',
        views: '267K',
        uploadedDate: '2024年2月20日',
        thumbnail: 'https://via.placeholder.com/320x180/FFB3BA/FFFFFF?text=Python',
        duration: 1650
    },
    {
        id: 9,
        title: 'Vueで構築するシングルページアプリケーション',
        channelId: 2,
        channel: 'ウェブ開発ラボ',
        views: '145K',
        uploadedDate: '2024年3月1日',
        thumbnail: 'https://via.placeholder.com/320x180/42C0FB/FFFFFF?text=Vue.js',
        duration: 2000
    },
    {
        id: 10,
        title: 'GraphQL vs REST API',
        channelId: 3,
        channel: 'バックエンド開発',
        views: '201K',
        uploadedDate: '2024年3月5日',
        thumbnail: 'https://via.placeholder.com/320x180/FF6B9D/FFFFFF?text=GraphQL',
        duration: 1100
    },
    {
        id: 11,
        title: 'Docker コンテナ化完全ガイド',
        channelId: 4,
        channel: 'データ科学チャンネル',
        views: '289K',
        uploadedDate: '2024年3月10日',
        thumbnail: 'https://via.placeholder.com/320x180/2E86C1/FFFFFF?text=Docker',
        duration: 2200
    },
    {
        id: 12,
        title: 'Git とGitHub の使い方マスター',
        channelId: 1,
        channel: 'プログラミング講座',
        views: '421K',
        uploadedDate: '2024年3月15日',
        thumbnail: 'https://via.placeholder.com/320x180/F4A261/FFFFFF?text=Git',
        duration: 1400
    }
];

const channelsData = [
    {
        id: 1,
        name: 'プログラミング講座',
        subscribers: '125K',
        description: 'JavaScriptやWebの基礎から応用まで学べるチャンネルです',
        avatar: '📚'
    },
    {
        id: 2,
        name: 'ウェブ開発ラボ',
        subscribers: '89K',
        description: 'React、Vue、その他のフレームワークについて深く学べます',
        avatar: '⚛️'
    },
    {
        id: 3,
        name: 'バックエンド開発',
        subscribers: '156K',
        description: 'Node.js、Python、データベースなどバックエンド技術を紹介',
        avatar: '🚀'
    },
    {
        id: 4,
        name: 'データ科学チャンネル',
        subscribers: '234K',
        description: 'Python、データ分析、機械学習の実践的なチュートリアル',
        avatar: '📊'
    }
];

// グローバル変数
let allVideos = [...videosData];
let subscribedChannels = [];
let currentView = 'home';
let currentPlayingVideo = null;

// DOMエレメント
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const videoGrid = document.getElementById('videoGrid');
const subscriptionVideos = document.getElementById('subscriptionVideos');
const homeView = document.getElementById('homeView');
const subscriptionsView = document.getElementById('subscriptionsView');
const navItems = document.querySelectorAll('.nav-item');
const subscribedChannelsContainer = document.getElementById('subscribedChannels');
const channelModal = document.getElementById('channelModal');
const closeModal = document.querySelector('.close');
const sectionTitle = document.getElementById('sectionTitle');
const videoPlayerModal = document.getElementById('videoPlayerModal');
const closeVideoBtn = document.querySelector('.close-video');
const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.querySelector('.progress-bar');
const progressFill = document.querySelector('.progress-fill');
const progressHandle = document.querySelector('.progress-handle');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const relatedVideosList = document.getElementById('relatedVideosList');

// 初期化
function init() {
    renderVideos(allVideos, videoGrid);
    setupEventListeners();
    updateSubscribedChannels();
}

// イベントリスナー設定
function setupEventListeners() {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            navItems.forEach(nav => nav.classList.remove('active'));
            e.target.closest('.nav-item').classList.add('active');
            
            const view = e.target.closest('.nav-item').dataset.view;
            switchView(view);
        });
    });

    closeModal.addEventListener('click', () => {
        channelModal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === channelModal) {
            channelModal.classList.remove('active');
        }
    });

    // ビデオプレイヤーのイベント
    closeVideoBtn.addEventListener('click', () => {
        videoPlayerModal.classList.remove('active');
        videoPlayer.pause();
    });

    window.addEventListener('click', (e) => {
        if (e.target === videoPlayerModal) {
            videoPlayerModal.classList.remove('active');
            videoPlayer.pause();
        }
    });

    playPauseBtn.addEventListener('click', togglePlayPause);
    videoPlayer.addEventListener('play', () => {
        playPauseBtn.textContent = '⏸';
    });
    videoPlayer.addEventListener('pause', () => {
        playPauseBtn.textContent = '▶';
    });

    videoPlayer.addEventListener('timeupdate', updateProgress);
    videoPlayer.addEventListener('loadedmetadata', updateDuration);

    // プログレスバーの操作
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        videoPlayer.currentTime = percent * videoPlayer.duration;
    });

    progressHandle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        let isDragging = true;

        const onMouseMove = (e) => {
            if (!isDragging) return;
            const rect = progressBar.getBoundingClientRect();
            const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            videoPlayer.currentTime = percent * videoPlayer.duration;
        };

        const onMouseUp = () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    // キーボード操作
    document.addEventListener('keydown', handleKeyboardControls);
}

// キーボード操作
function handleKeyboardControls(e) {
    if (videoPlayerModal.classList.contains('active')) {
        switch (e.key.toLowerCase()) {
            case 'a':
                e.preventDefault();
                videoPlayer.currentTime = Math.max(0, videoPlayer.currentTime - 5);
                break;
            case 'd':
                e.preventDefault();
                videoPlayer.currentTime = Math.min(videoPlayer.duration, videoPlayer.currentTime + 5);
                break;
            case 's':
                e.preventDefault();
                togglePlayPause();
                break;
        }
    }
}

// 再生/一時停止の切り替え
function togglePlayPause() {
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

// プログレスの更新
function updateProgress() {
    const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressFill.style.width = percent + '%';
    progressHandle.style.left = percent + '%';
    currentTimeDisplay.textContent = formatTime(videoPlayer.currentTime);
}

// 期間の更新
function updateDuration() {
    durationDisplay.textContent = formatTime(videoPlayer.duration);
}

// 時間フォーマット
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// 検索実行
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        allVideos = [...videosData];
        sectionTitle.textContent = 'おすすめ';
    } else {
        allVideos = videosData.filter(video => 
            video.title.toLowerCase().includes(query) ||
            video.channel.toLowerCase().includes(query)
        );
        sectionTitle.textContent = `「${searchInput.value}」の検索結果`;
    }
    
    renderVideos(allVideos, videoGrid);
}

// ビューの切り替え
function switchView(view) {
    currentView = view;
    
    homeView.classList.remove('active');
    subscriptionsView.classList.remove('active');
    
    if (view === 'home') {
        homeView.classList.add('active');
        searchInput.value = '';
        allVideos = [...videosData];
        sectionTitle.textContent = 'おすすめ';
        renderVideos(allVideos, videoGrid);
    } else if (view === 'subscriptions') {
        subscriptionsView.classList.add('active');
        const subscriptionVideosList = videosData.filter(video =>
            subscribedChannels.some(ch => ch.id === video.channelId)
        );
        renderVideos(subscriptionVideosList, subscriptionVideos);
    }
}

// ビデオレンダリング
function renderVideos(videos, container) {
    container.innerHTML = '';
    
    if (videos.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #606060;">動画が見つかりません</div>';
        return;
    }
    
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail" style="background-image: url('${video.thumbnail}'); background-size: cover; background-position: center;"></div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-channel">${video.channel}</div>
                <div class="video-stats">${video.views} • ${video.uploadedDate}</div>
            </div>
        `;
        
        videoCard.addEventListener('click', () => {
            playVideo(video);
        });
        
        container.appendChild(videoCard);
    });
}

// 関連動画を表示
function displayRelatedVideos(currentVideo) {
    relatedVideosList.innerHTML = '';
    
    // 関連動画を取得（同じカテゴリの動画）
    const relatedVideos = videosData.filter(video => 
        video.id !== currentVideo.id && 
        (video.channelId === currentVideo.channelId || 
         videosData.filter(v => v.channelId === video.channelId).length > 0)
    ).slice(0, 15);
    
    relatedVideos.forEach(video => {
        const relatedCard = document.createElement('div');
        relatedCard.className = 'related-video-card';
        relatedCard.innerHTML = `
            <div class="related-video-thumbnail" style="background-image: url('${video.thumbnail}'); background-size: cover; background-position: center;"></div>
            <div class="related-video-info">
                <div class="related-video-title">${video.title}</div>
                <div class="related-video-channel">${video.channel}</div>
                <div class="related-video-stats">${video.views}</div>
            </div>
        `;
        
        relatedCard.addEventListener('click', () => {
            playVideo(video);
        });
        
        relatedVideosList.appendChild(relatedCard);
    });
}

// 動画を再生
function playVideo(video) {
    currentPlayingVideo = video;
    
    // 簡易的なダミービデオソース（実際には実在するビデオURLに置き換えてください）
    videoPlayer.src = '';
    
    document.getElementById('videoTitle').textContent = video.title;
    document.getElementById('videoChannel').textContent = video.channel;
    document.getElementById('videoDescription').textContent = `再生回数: ${video.views} • アップロード日: ${video.uploadedDate}`;
    
    // 関連動画を表示
    displayRelatedVideos(video);
    
    videoPlayerModal.classList.add('active');
}

// チャンネルモーダル表示
function showChannelModal(channel) {
    const channelVideos = videosData.filter(v => v.channelId === channel.id);
    const isSubscribed = subscribedChannels.some(ch => ch.id === channel.id);
    
    const channelDetail = document.getElementById('channelDetail');
    channelDetail.innerHTML = `
        <div class="channel-header">
            <div class="channel-avatar">${channel.avatar}</div>
            <div class="channel-info">
                <h3>${channel.name}</h3>
                <p>${channel.subscribers}人の登録者</p>
                <p>${channel.description}</p>
                <button class="subscribe-btn" data-channel-id="${channel.id}">
                    ${isSubscribed ? '登録済み' : '登録する'}
                </button>
            </div>
        </div>
        <div class="channel-videos">
            <h4>人気動画</h4>
            <div class="video-grid">
                ${channelVideos.map(video => `
                    <div class="video-card">
                        <div class="video-thumbnail" style="background-image: url('${video.thumbnail}'); background-size: cover; background-position: center;"></div>
                        <div class="video-info">
                            <div class="video-title">${video.title}</div>
                            <div class="video-stats">${video.views} • ${video.uploadedDate}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // ビデオカードにクリックイベントを追加
    const videoCards = channelDetail.querySelectorAll('.video-card');
    videoCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            playVideo(channelVideos[index]);
            channelModal.classList.remove('active');
        });
    });
    
    const subscribeBtn = channelDetail.querySelector('.subscribe-btn');
    subscribeBtn.addEventListener('click', () => toggleSubscription(channel, subscribeBtn));
    
    channelModal.classList.add('active');
}

// 登録切り替え
function toggleSubscription(channel, button) {
    const index = subscribedChannels.findIndex(ch => ch.id === channel.id);
    
    if (index > -1) {
        subscribedChannels.splice(index, 1);
        button.textContent = '登録する';
    } else {
        subscribedChannels.push(channel);
        button.textContent = '登録済み';
    }
    
    updateSubscribedChannels();
}

// 登録中のチャンネル更新
function updateSubscribedChannels() {
    subscribedChannelsContainer.innerHTML = '';
    
    if (subscribedChannels.length === 0) {
        subscribedChannelsContainer.innerHTML = '<p style="font-size: 12px; color: #606060; padding: 10px 0;">チャンネルに登録していません</p>';
        return;
    }
    
    subscribedChannels.forEach(channel => {
        const channelItem = document.createElement('div');
        channelItem.className = 'channel-item';
        channelItem.textContent = `${channel.avatar} ${channel.name}`;
        
        channelItem.addEventListener('click', () => {
            showChannelModal(channel);
        });
        
        subscribedChannelsContainer.appendChild(channelItem);
    });
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', init);
