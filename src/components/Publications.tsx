import React, { useState } from 'react';
import { DoctorProfile, PublicationItem } from '../types/doctor';
import { BookOpen, ExternalLink, FileText, CheckCircle2, Search } from './IconHelper';

interface PublicationsProps {
  doctor: DoctorProfile;
}

export const Publications: React.FC<PublicationsProps> = ({ doctor }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');

  if (!doctor.publications || doctor.publications.length === 0) {
    return null;
  }

  const types = ['All', ...Array.from(new Set(doctor.publications.map(p => p.type)))];

  const filteredPublications = doctor.publications.filter(pub => {
    const matchesType = selectedType === 'All' || pub.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleCopyCitation = (pub: PublicationItem) => {
    const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}.${pub.doi ? ` doi:${pub.doi}` : ''}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-teal-600" />
              <span>Academic Scholarship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Research & Publications
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2">
              Peer-reviewed clinical research papers, multicenter interventional registries, and clinical practice guidelines.
            </p>
          </div>

          {/* Social Profiles / Academic Links */}
          <div className="flex flex-wrap items-center gap-2">
            {doctor.contact.socialProfiles.researchGate && (
              <a
                href={doctor.contact.socialProfiles.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              >
                <span>ResearchGate</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            )}
            {doctor.contact.socialProfiles.orcid && (
              <a
                href={doctor.contact.socialProfiles.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <span>ORCID Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
              </a>
            )}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8 p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, keyword, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy-900"
            />
          </div>

          {types.length > 2 && (
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                    selectedType === type
                      ? 'bg-navy-900 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Academic Citation List */}
        <div className="space-y-4">
          {filteredPublications.map((pub, index) => (
            <div
              key={pub.id || index}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:border-navy-300 hover:shadow-card transition-all flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-navy-50 text-navy-900 border border-navy-100">
                    {pub.type}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {pub.year}
                  </span>
                  {pub.citationCount && (
                    <span className="text-[11px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      {pub.citationCount} Citations
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {pub.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-serif italic">
                  {pub.authors}
                </p>

                <div className="text-xs font-semibold text-teal-900">
                  {pub.journal}
                </div>

                {(pub.doi || pub.pubmedId) && (
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-500">
                    {pub.doi && (
                      <span>
                        DOI: <code className="font-mono text-slate-700">{pub.doi}</code>
                      </span>
                    )}
                    {pub.pubmedId && (
                      <span>
                        PMID: <code className="font-mono text-slate-700">{pub.pubmedId}</code>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center md:flex-col gap-2 shrink-0 pt-2 md:pt-0">
                <button
                  type="button"
                  onClick={() => handleCopyCitation(pub)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center gap-1.5"
                >
                  {copiedId === pub.id ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-navy-900 bg-navy-50 hover:bg-navy-100 border border-navy-200 transition-colors flex items-center gap-1.5"
                  >
                    <span>View PubMed</span>
                    <ExternalLink className="w-3 h-3 text-teal-600" />
                  </a>
                )}
              </div>
            </div>
          ))}

          {filteredPublications.length === 0 && (
            <div className="p-10 text-center rounded-xl bg-slate-50 border border-slate-200 text-slate-500 text-sm">
              No publications match your filter criteria.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
