document.addEventListener('DOMContentLoaded', function() {
    // 检查当前暗色模式状态
    function updateAvatarBasedOnDarkMode() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        const avatar = document.querySelector('.site-logo');
        
        if (avatar) {
            const lightSrc = avatar.dataset.srcLight || avatar.src;
            const darkSrc = avatar.dataset.srcDark;
            
            if (darkSrc) {
                if (isDarkMode) {
                    avatar.src = darkSrc;
                } else {
                    avatar.src = lightSrc;
                }
            }
        }
    }
    
    // 初始加载时更新头像
    updateAvatarBasedOnDarkMode();
    
    // 监听暗色模式切换事件
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            // 延迟执行以确保主题切换完成
            setTimeout(updateAvatarBasedOnDarkMode, 100);
        });
    }
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateAvatarBasedOnDarkMode);
});