import React, { useState } from 'react';
import { Linkedin, Github, Mail, Award, Code, Trophy, Star, Cloud } from 'lucide-react';

export default function KeshavLinktree() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const links = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/keshavsrini1525/',
      color: '#0A66C2',
      description: 'Professional Network'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/keshsrini',
      color: '#181717',
      description: 'Code Repository'
    },
    {
      name: 'Gmail',
      icon: Mail,
      url: 'mailto:keshavsrinivasm@gmail.com',
      color: '#EA4335',
      description: 'Contact Me'
    },
    {
      name: 'AWS Skills Profile',
      logoUrl: '/aws-logo.png',
      url: 'https://skillsprofile.skillbuilder.aws/user/keshav-srini/certification-badges',
      color: '#FF9900',
      description: 'AWS Expertise'
    },
    {
      name: 'AWS Builder Profile',
      logoUrl: '/aws-logo.png',
      url: 'https://builder.aws.com/community/@keshav15',
      color: '#232F3E',
      description: 'Builder Journey'
    },
    {
      name: 'LeetCode',
      logoUrl: '/icons8-leetcode-96 (1).png',
      url: 'https://leetcode.com/u/keshavsrini/',
      color: '#FFA116',
      description: 'Coding Practice'
    },
    {
      name: 'HackerRank',
      logoUrl: '/HackerRank_Icon-1000px.png',
      url: 'https://www.hackerrank.com/profile/keshavsrinivasm',
      color: '#00EA64',
      description: 'Problem Solving'
    },
    {
      name: 'CodeForces',
      logoUrl: '/icons8-codeforces-filled-96.png',
      url: 'https://codeforces.com/profile/keshavsrini',
      color: '#1F8ACB',
      description: 'Competitive Programming'
    },
    {
      name: 'AtCoder',
      logoUrl: '/Atcoder.svg',
      url: 'https://atcoder.jp/users/keshavsrini',
      color: '#000000',
      description: 'Contest Platform'
    },
    {
      name: 'Credly',
      logoUrl: '/icons8-credly-color-96.png',
      url: 'https://www.credly.com/users/keshav-srinivas-m',
      color: '#FF6B00',
      description: 'Digital Badges'
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #232F3E 0%, #16202E 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {/* Gradient Orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            style={{
              position: 'absolute',
              width: Math.random() * 200 + 100 + 'px',
              height: Math.random() * 200 + 100 + 'px',
              background: `radial-gradient(circle, ${i % 2 ? '#FF9900' : '#0A66C2'}20, transparent 70%)`,
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `pulse ${Math.random() * 4 + 3}s ease-in-out infinite, drift ${Math.random() * 20 + 15}s linear infinite`
            }}
          />
        ))}
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            style={{
              position: 'absolute',
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              background: ['#FF9900', '#0A66C2', '#EA4335', '#00EA64'][Math.floor(Math.random() * 4)],
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite alternate, sparkle ${Math.random() * 2 + 1}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          100% { transform: translateY(-30px) rotate(360deg) scale(1.2); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.6; }
        }
        @keyframes drift {
          0% { transform: translateX(0px); }
          50% { transform: translateX(100px); }
          100% { transform: translateX(0px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
      {/* Header */}
      <header style={{
        position: 'relative',
        zIndex: 10,
        background: '#232F3E',
        borderBottom: '1px solid #414d5c',
        padding: '16px 32px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Logo */}
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #FF9900 0%, #FF6B00 100%)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '24px',
            color: 'white',
            boxShadow: '0 4px 6px rgba(255, 153, 0, 0.3)'
          }}>
            KS
          </div>
          <div>
            <h1 style={{
              margin: 0,
              fontSize: '20px',
              fontWeight: '600',
              color: 'white',
              letterSpacing: '0.5px'
            }}>
              Keshav Srinivas M's Linktree
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '48px 24px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Profile Section */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          marginBottom: '32px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          textAlign: 'center'
        }}>
          {/* Profile Picture */}
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            margin: '0 auto 24px',
            boxShadow: '0 8px 16px rgba(255, 153, 0, 0.3)',
            border: '4px solid white',
            overflow: 'hidden'
          }}>
            <img 
              src="/profile.jpeg" 
              alt="Keshav's Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Name */}
          <h2 style={{
            margin: '0 0 8px 0',
            fontSize: '32px',
            fontWeight: '700',
            color: '#232F3E'
          }}>
            Keshav Srinivas M
          </h2>

          {/* About Description */}
          <p style={{
            margin: 0,
            fontSize: '16px',
            color: '#545b64',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            AWS Educate Program Advocate | Oracle Certified AI Foundations Associate | Celebal Technologies Intern | 15X AWS Educate Badges | 2X HackerRank Certified | Cloud Enthusiast | Programming fanatic | Data Science Learner | Machine Learning
          </p>
        </div>

        {/* Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {links.map((link, index) => {
            const Icon = link.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '24px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  borderColor: isHovered ? link.color : 'transparent',
                  boxShadow: isHovered 
                    ? '0 8px 24px rgba(0,0,0,0.2)' 
                    : '0 2px 8px rgba(0,0,0,0.1)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: `${link.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                }}>
                  {link.logoUrl ? (
                    <img 
                      src={link.logoUrl} 
                      alt={link.name}
                      style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                    />
                  ) : (
                    <Icon size={24} color={link.color} />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontWeight: '600',
                    fontSize: '16px',
                    color: '#232F3E',
                    marginBottom: '4px'
                  }}>
                    {link.name}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#545b64'
                  }}>
                    {link.description}
                  </div>
                </div>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: isHovered ? `${link.color}20` : '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{ 
                    color: isHovered ? link.color : '#545b64',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>→</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          color: '#aab7c4',
          fontSize: '14px'
        }}>
          <p>© 2025 Keshav. Linktree</p>
        </div>
      </main>
    </div>
  );
}
