import { motion } from 'framer-motion';
import { FiArrowUpRight, FiAward, FiCpu, FiLayers, FiShield, FiZap } from 'react-icons/fi';
import { MotionSection } from './MotionSection';

const isImageUrl = (url) => {
  if (!url) return false;

  try {
    const parsed = new URL(url);
    const blockedHosts = ['drive.google.com', 'learn.microsoft.com', 'www.linkedin.com'];
    if (blockedHosts.includes(parsed.hostname)) return false;
    if (parsed.hostname === 'images.credly.com') return true;

    return /\.(png|jpe?g|webp|gif|svg|bmp|avif)(\?.*)?$/i.test(parsed.pathname);
  } catch {
    return false;
  }
};

const buildPreviewSvg = (title, issuer, accent) => {
  const safeTitle = (title || 'Credential').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeIssuer = (issuer || 'Issued').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const initials = (issuer || 'CR')
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] || '')
    .join('')
    .toUpperCase() || 'CR';

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="420" viewBox="0 0 800 420">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${accent || '#60a5fa'}" stop-opacity="0.96"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.94"/>
        </linearGradient>
      </defs>
      <rect width="800" height="420" rx="28" fill="url(#g)"/>
      <circle cx="145" cy="150" r="110" fill="rgba(255,255,255,0.12)"/>
      <circle cx="670" cy="330" r="130" fill="rgba(255,255,255,0.08)"/>
      <rect x="55" y="55" width="110" height="110" rx="22" fill="rgba(255,255,255,0.12)"/>
      <text x="110" y="118" text-anchor="middle" font-size="34" font-family="Segoe UI, Arial, sans-serif" font-weight="700" fill="white">${initials}</text>
      <text x="55" y="240" font-size="30" font-family="Segoe UI, Arial, sans-serif" fill="rgba(255,255,255,0.78)" letter-spacing="2">${safeIssuer}</text>
      <text x="55" y="286" font-size="26" font-family="Segoe UI, Arial, sans-serif" font-weight="700" fill="white">${safeTitle}</text>
      <rect x="55" y="320" width="174" height="38" rx="19" fill="rgba(255,255,255,0.16)"/>
      <text x="142" y="346" text-anchor="middle" font-size="18" font-family="Segoe UI, Arial, sans-serif" font-weight="600" fill="white">Credential</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const getCredentialPreviewUrl = (credential, title, issuer, accent) => {
  if (!credential) return buildPreviewSvg(title, issuer, accent);

  const normalized = credential.trim();

  if (normalized.includes('images.credly.com')) {
    return normalized;
  }

  try {
    const host = new URL(normalized).hostname;
    const blockedHosts = ['drive.google.com', 'learn.microsoft.com', 'www.linkedin.com'];
    if (blockedHosts.includes(host)) {
      return buildPreviewSvg(title, issuer, accent);
    }
  } catch {
    // Fall through to generic fallback below for non-URL values.
  }

  if (isImageUrl(normalized)) {
    return normalized;
  }

  return buildPreviewSvg(title, issuer, accent);
};

const Certifications = () => {
  const certificationGroups = [
    {
      title: 'Cloud Foundations',
      summary: 'Core cloud and architecture credentials that establish the base layer for delivery.',
      kicker: 'Microsoft',
      icon: FiShield,
      accent: '#60a5fa',
      accentSoft: 'rgba(96, 165, 250, 0.28)',
      certifications: [
        {
          name: 'Microsoft Certified: Azure Fundamentals',
          issuer: 'Microsoft',
          date: '2022',
          credential:
            'https://learn.microsoft.com/en-us/users/bagraunakcognizant-8512/credentials/85b5ba654520492?ref=https%3A%2F%2Fwww.linkedin.com%2F',
        },
        {
          name: 'GitHub Copilot',
          issuer: 'Microsoft',
          date: '2026',
          credential:
            'https://learn.microsoft.com/api/credentials/share/en-us/BagRaunakCognizant-8512/8F0B1A106B6F8E74?sharingId=703DE7458678E167',
        },
      ],
    },
    {
      title: 'Cloud Foundations',
      summary: 'Core cloud and architecture credentials that establish the base layer for delivery.',
      kicker: 'Oracle',
      icon: FiShield,
      accent: '#60a5fa',
      accentSoft: 'rgba(96, 165, 250, 0.28)',
      certifications: [
        {
          name: 'Oracle Cloud Infrastructure 2023 Certified Architect Associate',
          issuer: 'Oracle',
          date: '2023',
          credential: 'https://drive.google.com/file/d/1f3nJXNxyVPLEG1ecEswWPBCEeYgKSx2E/view',
        },
      ],
    },
    {
<<<<<<< HEAD
      title: 'Generative AI Builders',
      summary: 'Hands-on GenAI work that moves from hackathons to practical model-assisted delivery.',
      kicker: 'Anthropic',
      icon: FiZap,
      accent: '#f59e0b',
      accentSoft: 'rgba(245, 158, 11, 0.28)',
      certifications: [
        {
          name: 'Claude Code Hackathon',
          issuer: 'Anthropic',
          date: '2024',
          credential: 'https://www.credly.com/badges/06e690f7-dddc-48d1-a592-1d5ff0fc2713/public_url',
        },
      ],
    },
    {
      title: 'Agentic Platform Track',
      summary: 'Agent Development Kit and platform-oriented credentials focused on shipping deployable AI systems.',
      kicker: 'Google Cloud',
      icon: FiLayers,
      accent: '#34d399',
      accentSoft: 'rgba(52, 211, 153, 0.24)',
      certifications: [
        {
          name: 'Build with Gemini',
          issuer: 'Google Cloud',
          date: '2026',
          credential: 'https://www.credly.com/badges/0b06ec68-1666-4c2e-8adf-21c8084cfe06/public_url',
        },
        {
          name: 'Evaluate and Improve Agent Development Kit Agents',
          issuer: 'Google Cloud',
          date: '2026',
          credential: 'https://www.credly.com/badges/a6aeb30f-a187-4de3-bed1-88a7bf36a88e/public_url',
        },
        {
          name: 'Deploy an Agent with Agent Development Kit (ADK)',
          issuer: 'Google Cloud',
          date: '2026',
          credential: 'https://www.credly.com/badges/c50e7af0-c265-4940-851d-e554f27ae31f/public_url',
        },
        {
          name: 'Accelerate Development with Antigravity',
          issuer: 'Google Cloud',
          date: '2026',
          credential: 'https://www.credly.com/badges/2a51b60a-ccd0-4951-9fa2-f4a189725593/public_url',
        },
        {
          name: 'Certified Partner Specialist Gemini Enterprise Agent Development',
          issuer: 'Google Cloud',
          date: '2026',
          credential: 'https://www.credly.com/badges/31b97605-6d5d-4922-b7c4-12c6d31097b1/public_url',
        },
      ],
    },
    {
      title: 'OpenAI & Codex Practitioners',
      summary: 'Applied OpenAI credentials focused on deployment, solutions, and technical enablement.',
      kicker: 'Codex',
      icon: FiCpu,
      accent: '#a78bfa',
      accentSoft: 'rgba(167, 139, 250, 0.26)',
      certifications: [
        {
          name: 'ChatGPT Deployment Practitioner',
          issuer: 'Codex',
          date: '2026',
          credential: 'https://drive.google.com/file/d/1Hg1zYtSxS998emy98k5Cn5lTTZ9VKMaG/view?usp=sharing',
        },
        {
          name: 'Codex Solutions Practitioner',
          issuer: 'Codex',
          date: '2026',
          credential: 'https://drive.google.com/file/d/1onCLoeNkuTYMRzCUkwrCMat_7FeGkrpK/view?usp=sharing',
        },
        {
          name: 'API Deployment Practitioner',
          issuer: 'Codex',
          date: '2026',
          credential: 'https://drive.google.com/file/d/18bwTLn2bxJSB-RcdJKO64AurpxYL6jIz/view?usp=sharing',
        },
        {
          name: 'Codex Deployment Practitioner',
          issuer: 'Codex',
          date: '2026',
          credential: 'https://drive.google.com/file/d/1PpcYANNAqO78IGEXMTtbl0mnbzU50KFy/view?usp=sharing',
        },
        {
          name: 'OpenAI Consultative Solutions Practitioner',
          issuer: 'Codex',
          date: '2026',
          credential: 'https://drive.google.com/file/d/1_RLkEWOH6TkZ1LgkK-IWXlHwBbTvkCkW/view?usp=sharing',
        },
        {
          name: 'ChatGPT Solutions Practitioner',
          issuer: 'Codex',
          date: '2026',
          credential: 'https://drive.google.com/file/d/1ZsBzBf1iX0RsqtRiNyWG8tiVsHZBXqs8/view?usp=sharing',
        },
        {
          name: 'OpenAI Technical Practitioner',
          issuer: 'Codex',
          date: '2026',
          credential: 'https://drive.google.com/file/d/1ecRHvx9zKBe9O5eWnVA3k_hN4qlfF9pq/view?usp=sharing',
        },
        {
          name: 'OpenAI Cyber Deployment Practitioner',
          issuer: 'Codex',
          date: '2026',
          credential: 'https://drive.google.com/file/d/1KBOLTJW0zPTeaR9oumj79eu0jp1g9JFF/view?usp=sharing',
        },
      ],
=======
      name: 'Claude Code Hackathon',
      issuer: 'Anthropic',
      date: '2026',
      credential: 'https://www.credly.com/badges/06e690f7-dddc-48d1-a592-1d5ff0fc2713/linked_in_profile',
>>>>>>> d0ac7e0b952e0a967afeabc5df3fca32846590af
    },
  ];

  const totalCertifications = certificationGroups.reduce((sum, group) => sum + group.certifications.length, 0);
  const latestYear = Math.max(
    ...certificationGroups.flatMap((group) => group.certifications.map((cert) => Number(cert.date)))
  );
  const strongestTrack = certificationGroups.reduce((best, group) =>
    group.certifications.length > best.certifications.length ? group : best
  );

  return (
    <MotionSection id="certifications" className="certifications section">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Credentials</p>
          <h2 className="section-title">Certifications that back the craft.</h2>
          <p className="section-subtitle">
            Industry-recognized achievements in cloud, architecture, and developer excellence.
          </p>
        </div>
        <div className="certification-shell">
          <div className="cert-stats">
            <article className="cert-stat">
              <span className="cert-stat-label">Total credentials</span>
              <strong className="cert-stat-value">{totalCertifications}</strong>
              <span className="cert-stat-note">Across {certificationGroups.length} focused tracks</span>
            </article>
            <article className="cert-stat">
              <span className="cert-stat-label">Most active track</span>
              <strong className="cert-stat-value">{strongestTrack.title}</strong>
              <span className="cert-stat-note">{strongestTrack.certifications.length} badges collected</span>
            </article>
            <article className="cert-stat">
              <span className="cert-stat-label">Latest year</span>
              <strong className="cert-stat-value">{latestYear}</strong>
              <span className="cert-stat-note">Newest certifications in the collection</span>
            </article>
          </div>

          <div className="cert-groups">
            {certificationGroups.map((group, groupIndex) => (
              <motion.section
                key={group.title}
                className="cert-group"
                style={{ '--group-accent': group.accent, '--group-accent-soft': group.accentSoft }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-48px' }}
                transition={{ delay: groupIndex * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="cert-group-header">
                  <div className="cert-group-heading">
                    <span className="cert-group-icon">
                      {(() => {
                        const Icon = group.icon;
                        return <Icon />;
                      })()}
                    </span>
                    <div>
                      <p className="cert-group-kicker">{group.kicker}</p>
                      <h3 className="cert-group-title">{group.title}</h3>
                      <p className="cert-group-summary">{group.summary}</p>
                    </div>
                  </div>
                  <div className="cert-group-meta">
                    <span className="cert-meta-pill">{group.certifications.length} credentials</span>
                    <span className="cert-meta-pill">Newest {Math.max(...group.certifications.map((cert) => Number(cert.date)))}</span>
                  </div>
                </div>

                <div className="cert-card-grid">
                  {group.certifications.map((cert, certIndex) => {
                    const previewUrl = getCredentialPreviewUrl(cert.credential, cert.name, cert.issuer, group.accent);

                    return (
                      <motion.article
                        className="cert-card"
                        key={cert.name}
                        style={{ '--group-accent': group.accent, '--group-accent-soft': group.accentSoft }}
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-32px' }}
                        transition={{ delay: certIndex * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="cert-card-top">
                          <span className="cert-badge">
                            <FiAward />
                          </span>
                          <div className="cert-card-top-meta">
                            <span className="cert-year">{cert.date}</span>
                          </div>
                        </div>

                        <div className="cert-visual">
                          {previewUrl ? (
                            <>
                              <img
                                src={previewUrl}
                                alt={`${cert.name} credential preview`}
                                className="cert-credential-image"
                                loading="lazy"
                                onError={(event) => {
                                  const visual = event.currentTarget.parentElement;
                                  event.currentTarget.style.display = 'none';
                                  const fallback = visual?.querySelector('.cert-credential-fallback');
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                              <div className="cert-credential-fallback" aria-hidden="true">
                                <FiAward />
                                <span>Credential</span>
                              </div>
                            </>
                          ) : (
                            <div className="cert-credential-fallback" style={{ display: 'flex' }} aria-hidden="true">
                              <FiAward />
                              <span>Credential</span>
                            </div>
                          )}
                        </div>

                        <h4 className="cert-title">{cert.name}</h4>
                        <p className="cert-issuer">{cert.issuer}</p>
                        <div className="cert-footer">
                          <span className="cert-chip">Credential</span>
                          {cert.credential ? (
                            <a
                              href={cert.credential}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-ghost btn-sm"
                            >
                              View Credential <FiArrowUpRight />
                            </a>
                          ) : (
                            <span className="cert-chip">Not available</span>
                          )}
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Certifications;
