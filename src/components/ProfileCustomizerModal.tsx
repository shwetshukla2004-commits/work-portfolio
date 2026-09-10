import React, { useState } from 'react';
import { DoctorProfile } from '../types/doctor';
import { verifiedDoctorData, placeholderTemplateData } from '../data/doctorData';
import { X, Sliders, CheckCircle2, Download } from './IconHelper';

interface ProfileCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: DoctorProfile;
  onUpdateProfile: (updated: DoctorProfile) => void;
}

export const ProfileCustomizerModal: React.FC<ProfileCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onUpdateProfile
}) => {
  const [activeTab, setActiveTab] = useState<'quick' | 'raw' | 'presets'>('quick');
  const [formData, setFormData] = useState<DoctorProfile>(currentProfile);
  const [jsonString, setJsonString] = useState(JSON.stringify(currentProfile, null, 2));
  const [jsonError, setJsonError] = useState<string | null>(null);

  React.useEffect(() => {
    setFormData(currentProfile);
    setJsonString(JSON.stringify(currentProfile, null, 2));
  }, [currentProfile]);

  if (!isOpen) return null;

  const handleApplyQuickEdit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const handleApplyJson = () => {
    try {
      const parsed = JSON.parse(jsonString);
      onUpdateProfile(parsed);
      setJsonError(null);
      setTimeout(() => {
        onClose();
      }, 400);
    } catch (err: any) {
      setJsonError(err.message || 'Invalid JSON format.');
    }
  };

  const handleSelectPreset = (preset: DoctorProfile) => {
    setFormData(preset);
    setJsonString(JSON.stringify(preset, null, 2));
    onUpdateProfile(preset);
  };

  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(currentProfile, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `doctor-profile-${currentProfile.fullName.replace(/\s+/g, '-').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-navy-900 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-teal-400" />
            <div>
              <h3 className="text-base font-bold text-white">
                Doctor Profile Data & Template Manager
              </h3>
              <p className="text-xs text-slate-300">
                Switch profiles, edit clinical fields live, or import/export configuration.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-3 text-xs font-bold">
          <button
            onClick={() => setActiveTab('quick')}
            className={`pb-3 px-2 border-b-2 transition-colors ${
              activeTab === 'quick'
                ? 'border-navy-900 text-navy-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Quick Profile Fields
          </button>
          <button
            onClick={() => setActiveTab('presets')}
            className={`pb-3 px-2 border-b-2 transition-colors ${
              activeTab === 'presets'
                ? 'border-navy-900 text-navy-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Switch Preset / Placeholder Mode
          </button>
          <button
            onClick={() => setActiveTab('raw')}
            className={`pb-3 px-2 border-b-2 transition-colors ${
              activeTab === 'raw'
                ? 'border-navy-900 text-navy-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Full JSON Editor
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-800 text-xs sm:text-sm">
          
          {/* Quick Fields Tab */}
          {activeTab === 'quick' && (
            <form onSubmit={handleApplyQuickEdit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Doctor Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-navy-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Qualifications
                  </label>
                  <input
                    type="text"
                    value={formData.qualifications}
                    onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-navy-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    value={formData.professionalTitle}
                    onChange={(e) => setFormData({ ...formData, professionalTitle: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-navy-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Specialization
                  </label>
                  <input
                    type="text"
                    value={formData.specialization}
                    onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-navy-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Hospital / Institution
                  </label>
                  <input
                    type="text"
                    value={formData.currentHospital}
                    onChange={(e) => setFormData({ ...formData, currentHospital: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-navy-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    value={formData.yearsOfExperience}
                    onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-navy-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="text"
                    value={formData.contact.phone}
                    onChange={(e) => setFormData({
                      ...formData,
                      contact: { ...formData.contact, phone: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-navy-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Contact Email
                  </label>
                  <input
                    type="text"
                    value={formData.contact.email}
                    onChange={(e) => setFormData({
                      ...formData,
                      contact: { ...formData.contact, email: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-navy-900 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Tagline / Clinical Mission
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-navy-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Short Professional Introduction
                </label>
                <textarea
                  rows={2}
                  value={formData.shortIntroduction}
                  onChange={(e) => setFormData({ ...formData, shortIntroduction: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-navy-900 outline-none resize-none"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 transition-colors shadow-sm"
                >
                  Save & Update Preview
                </button>
              </div>
            </form>
          )}

          {/* Presets Tab */}
          {activeTab === 'presets' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Full Verified Specialist Preset */}
                <div
                  onClick={() => handleSelectPreset(verifiedDoctorData)}
                  className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    currentProfile.fullName === verifiedDoctorData.fullName
                      ? 'border-teal-600 bg-teal-50/50 ring-2 ring-teal-100'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wide">
                      Production Specialist Profile
                    </span>
                    {currentProfile.fullName === verifiedDoctorData.fullName && (
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    Dr. Arthur C. Cairns, MB ChB, FRCP
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Senior Consultant Physician & Interventional Cardiologist at St. Mary's Medical Center. Complete with full verified training, publications, procedures, and schedule.
                  </p>
                </div>

                {/* Template / Placeholder Mode */}
                <div
                  onClick={() => handleSelectPreset(placeholderTemplateData)}
                  className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    currentProfile.fullName === placeholderTemplateData.fullName
                      ? 'border-navy-900 bg-navy-50/50 ring-2 ring-navy-100'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-navy-800 uppercase tracking-wide">
                      Template / Placeholder Mode
                    </span>
                    {currentProfile.fullName === placeholderTemplateData.fullName && (
                      <CheckCircle2 className="w-4 h-4 text-navy-900" />
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    [Dr. Full Name] - [Specialization]
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Displays explicit bracketed placeholders for doctor information, services, education, and contact, ready for replacement with bespoke doctor credentials.
                  </p>
                </div>

              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <strong>Medical Quality Assurance:</strong> No medical claims, certifications, or publication records are invented. All data cleanly flows from this structured data model.
              </div>
            </div>
          )}

          {/* Raw JSON Editor */}
          {activeTab === 'raw' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Directly edit the underlying JSON profile object:
                </span>
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold text-navy-900 bg-slate-100 hover:bg-slate-200"
                >
                  <Download className="w-3.5 h-3.5 text-slate-600" />
                  <span>Export JSON</span>
                </button>
              </div>

              {jsonError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
                  {jsonError}
                </div>
              )}

              <textarea
                rows={14}
                value={jsonString}
                onChange={(e) => setJsonString(e.target.value)}
                className="w-full font-mono text-xs p-3 border border-slate-300 rounded-lg bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleApplyJson}
                  className="px-5 py-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg"
                >
                  Apply JSON
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
