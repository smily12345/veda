import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AudioPlayer } from '../components/AudioPlayer';
import { Users, BookOpen } from 'lucide-react';

const partiesData = [
  {
    id: 'partyA',
    name: 'National Democratic Party',
    leader: 'A. Sharma',
    focus: 'Infrastructure, Digitalization',
    schemes: ['Digital India', 'National Highway Expand'],
    performance: 'Built 10,000 km of roads, digitized 50% of rural services.'
  },
  {
    id: 'partyB',
    name: 'United Progressive Alliance',
    leader: 'R. Singh',
    focus: 'Welfare, Rural Employment',
    schemes: ['Rural Job Guarantee', 'Free Health Access'],
    performance: 'Provided employment to 5 million rural youth, opened 1000 clinics.'
  },
  {
    id: 'partyC',
    name: 'Regional Development Front',
    leader: 'K. Reddy',
    focus: 'State Agriculture, Education',
    schemes: ['Farmer Support Fund', 'Smart Classrooms'],
    performance: 'Increased state crop yield by 15%, upgraded 500 state schools.'
  }
];

const Parties = () => {
  const { t } = useLanguage();
  const [selectedParty, setSelectedParty] = useState(null);

  return (
    <div className="animate-fade-in flex flex-col items-center">
      <h2>Political Awareness & Parties</h2>
      <p style={{ textAlign: 'center', maxWidth: '600px' }}>
        Learn about major political parties, their focus areas, and recent work. 
        Evaluate leaders based on facts, development, and integrity.
      </p>

      <div className="flex gap-4 mt-4 w-full" style={{ maxWidth: '1000px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="flex flex-col gap-4 w-full md:w-1/3" style={{ flex: '1 1 300px' }}>
          <h3>Parties Overview</h3>
          {partiesData.map(party => (
            <div 
              key={party.id} 
              className="glass-panel" 
              style={{ padding: '1rem', cursor: 'pointer', border: selectedParty?.id === party.id ? '2px solid var(--primary-color)' : '' }}
              onClick={() => setSelectedParty(party)}
            >
              <h4>{party.name}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Leader: {party.leader}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/3" style={{ flex: '2 1 400px' }}>
          {selectedParty ? (
            <div className="glass-panel animate-fade-in" style={{ padding: '2rem' }}>
              <div className="flex justify-between items-start mb-4">
                <h2>{selectedParty.name}</h2>
                <AudioPlayer text={`${selectedParty.name}, led by ${selectedParty.leader}. Focus areas include ${selectedParty.focus}.`} />
              </div>
              <p><strong>Leader:</strong> {selectedParty.leader}</p>
              <p><strong>Key Focus Areas:</strong> {selectedParty.focus}</p>
              
              <h4 className="mt-4">Major Schemes</h4>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                {selectedParty.schemes.map((scheme, idx) => <li key={idx}>{scheme}</li>)}
              </ul>

              <h4>Last 5 Years Performance</h4>
              <p>{selectedParty.performance}</p>
            </div>
          ) : (
            <div className="glass-panel flex flex-col items-center justify-center" style={{ padding: '2rem', minHeight: '300px', color: 'var(--text-muted)' }}>
              <Users size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p>Select a party to view details and performance.</p>
            </div>
          )}
        </div>
      </div>

      {/* Leader Evaluation Guide */}
      <div className="glass-panel mt-4 w-full" style={{ maxWidth: '1000px', padding: '2rem' }}>
        <div className="flex justify-between mb-4">
          <h3><BookOpen className="inline mr-2"/> Leader Evaluation Guide</h3>
          <AudioPlayer text="How to evaluate leaders: Look at their past work, integrity, public service record, and delivery on promises." />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
            <h4>1. Past Work & Experience</h4>
            <p style={{ fontSize: '0.9rem' }}>What have they achieved in their previous roles? Look for measurable development.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
            <h4>2. Integrity & Criminal Record</h4>
            <p style={{ fontSize: '0.9rem' }}>Check if they have a clean background and practice ethical politics.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
            <h4>3. Public Service</h4>
            <p style={{ fontSize: '0.9rem' }}>Are they accessible? Do they address the real problems of the constituency?</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
            <h4>4. Delivery on Promises</h4>
            <p style={{ fontSize: '0.9rem' }}>Did they fulfill the promises made in their previous manifesto?</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Parties;
