import { motion } from "framer-motion";

export default function GitHubStats() {
  return (
    <section style={{ backgroundColor: '#0f0f0f', padding: '96px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle">
            Código en acción - Mi actividad en tiempo real
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            justifyItems: 'center'
          }}
        >
          {/* GitHub Stats Card */}
          <img
            src="https://github-readme-stats.vercel.app/api?username=renzonodari9&show_icons=true&theme=dark&bg_color=1a1a1a&border_color=3f3f46&icon_color=22c55e&text_color=ffffff&title_color=22c55e"
            alt="GitHub Stats"
            style={{
              borderRadius: '16px',
              border: '1px solid #3f3f46',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          
          {/* Top Languages */}
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=renzonodari9&layout=compact&theme=dark&bg_color=1a1a1a&border_color=3f3f46&text_color=ffffff&title_color=22c55e"
            alt="Top Languages"
            style={{
              borderRadius: '16px',
              border: '1px solid #3f3f46',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          <a
            href="https://github.com/renzonodari9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: 'rgba(39, 39, 42, 0.6)',
              border: '1px solid #3f3f46',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#22c55e';
              e.target.style.background = 'rgba(34, 197, 94, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#3f3f46';
              e.target.style.background = 'rgba(39, 39, 42, 0.6)';
            }}
          >
            <span style={{ fontSize: '18px' }}>⭐</span>
            Ver perfil completo en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
