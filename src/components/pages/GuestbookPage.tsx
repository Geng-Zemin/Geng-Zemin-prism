'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function GuestbookPage({ title, description }: { title: string; description?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || container.querySelector('script')) return;

        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.setAttribute('repo', 'Geng-Zemin/Geng-Zemin.github.io');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('label', 'guestbook');
        script.setAttribute('theme', 'github-light');
        container.appendChild(script);

        return () => {
            container.innerHTML = '';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto"
        >
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">{title}</h1>
            {description && (
                <p className="text-lg text-neutral-600 dark:text-neutral-500 mb-8 max-w-2xl">
                    {description}
                </p>
            )}
            <div
                ref={containerRef}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-6"
            />
        </motion.div>
    );
}
