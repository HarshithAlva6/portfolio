import React, { useEffect, useState } from 'react';

function DuolingoStats() {
    const [stats, setStats] = useState([]);
    const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
    const [isVisible, setIsVisible] = useState(false);
    const [isHiding, setIsHiding] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        fetch('https://harshithalva6.github.io/Duolingo/duolingo.json', { signal: controller.signal })
            .then((response) => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            })
            .then((data) => {
                const extractedStats = (data.stats || []).map((htmlString) => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(htmlString, "text/html");
                    const imgTag = doc.querySelector("img");
                    const h4Tag = doc.querySelector("h4");
                    const divTag = doc.querySelector("div._3oUUc");
                    return {
                        img_src: imgTag ? imgTag.src : null,
                        title: h4Tag ? h4Tag.textContent.trim() : null,
                        description: divTag ? divTag.textContent.trim() : null
                    };
                });

                setStats(extractedStats);
                setStatus('ready');
            })
            .catch((error) => {
                if (error.name === 'AbortError') return; // unmounted, ignore
                setStatus('error');
            });

        return () => controller.abort();
    }, []);

    const switchAni = () => {
        if (isVisible) {
          setIsHiding(true);
          setTimeout(() => {
            setIsVisible(false);
            setIsHiding(false);
          }, 1000); 
        } else {
          setIsVisible(true);
        }
      };

    // If the external stats source is unavailable, hide the teaser entirely
    // instead of showing a button that opens an empty/broken panel.
    if (status === 'error') return null;

    return (
        <>
        <button
        onClick={switchAni}
        className="text-white px-4 py-2 m-6 rounded-sm ring-4 ring-teal-600
        hover:ring-teal-900 transition-transform hover:translate-y-0.5"
        >
        {isVisible ? `Wasn't that interesting!` : 'Curious about my Duolingo?'}
      </button>
      {isVisible && (
        <div className={`flex flex-col items-center justify-center p-5 rounded-lg ${isHiding ? 'animate-flyin' : 'animate-flyout'}`}>
            <h2 className="my-heading pb-10">Japanese Track!</h2>
            {status === 'ready' && stats.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-5 rounded-2xl text-center text-white w-60"
                        >
                            {stat.img_src && <img src={stat.img_src} alt={stat.title || 'Duolingo statistic'} className="w-12 h-12 mx-auto mb-3" />}
                            <p className="text-xl font-semibold">{stat.title}</p>
                            <p className="text-sm">{stat.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-white text-lg">Loading…</p>
            )}
        </div>
        )}
        </>
    );
}

export default DuolingoStats;
