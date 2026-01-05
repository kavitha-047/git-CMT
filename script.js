document.addEventListener('DOMContentLoaded', () => {
    const activityList = document.getElementById('activity-list');
    
    const activities = [
        {
            title: "Backdated Commit Created",
            desc: "New contribution added for January 1st, 2026",
            time: "Just now",
            icon: "git-commit"
        },
        {
            title: "Analytics Sync",
            desc: "Monthly performance report generated in analytics-v2.js",
            time: "2 hours ago",
            icon: "refresh-cw"
        },
        {
            title: "User Profile Updated",
            desc: "Primary email set to kavithakanagaraj470@gmail.com",
            time: "5 hours ago",
            icon: "user"
        },
        {
            title: "Repo Initialized",
            desc: "New repository tracking started for git-CMT",
            time: "1 day ago",
            icon: "plus-circle"
        }
    ];

    function renderActivities() {
        if (!activityList) return;
        activityList.innerHTML = activities.map((act, index) => `
            <div class="activity-item" style="animation-delay: ${index * 0.1}s">
                <div class="activity-icon">
                    <i data-lucide="${act.icon}"></i>
                </div>
                <div class="activity-details">
                    <h4>${act.title}</h4>
                    <p>${act.desc}</p>
                </div>
                <div class="activity-time">${act.time}</div>
            </div>
        `).join('');
        
        lucide.createIcons();
    }

    renderActivities();

    const cards = document.querySelectorAll('.stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--primary)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'var(--border)';
        });
    });

    const historyBody = document.getElementById('commit-history-body');
    const historyData = [
        {
            hash: "e918bf0",
            message: "Added commit history feature",
            time: "2026-01-02 23:00",
            status: "Success"
        },
        {
            hash: "7f77fe1",
            message: "Dashboard UI implementation backdated",
            time: "2026-01-01 18:00",
            status: "Success"
        },
        {
            hash: "f241f79",
            message: "Backdated contribution for Jan 1, 2026",
            time: "2026-01-01 18:00",
            status: "Success"
        },
        {
            hash: "214e8ed",
            message: "update log 7",
            time: "2026-03-12 22:41",
            status: "Success"
        }
    ];

    function renderHistory() {
        if (!historyBody) return;
        historyBody.innerHTML = historyData.map(item => `
            <tr>
                <td><span class="hash-cell">${item.hash}</span></td>
                <td>${item.message}</td>
                <td style="color: var(--text-muted);">${item.time}</td>
                <td><span class="status-badge success">${item.status}</span></td>
            </tr>
        `).join('');
    }

    renderHistory();
});
