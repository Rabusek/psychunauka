'use client';

import { useState } from 'react';
import { chapters } from '@/data/learningContent';

export default function LearningView() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const currentChapter = chapters[currentChapterIndex];
  const currentSection = currentChapter.sections[currentSectionIndex];

  const totalSections = chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
  const currentGlobalSection = chapters
    .slice(0, currentChapterIndex)
    .reduce((acc, ch) => acc + ch.sections.length, 0) + currentSectionIndex + 1;

  const goToPrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
    } else if (currentChapterIndex > 0) {
      const prevChapter = chapters[currentChapterIndex - 1];
      setCurrentChapterIndex(prev => prev - 1);
      setCurrentSectionIndex(prevChapter.sections.length - 1);
    }
  };

  const goToNext = () => {
    if (currentSectionIndex < currentChapter.sections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
    } else if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
      setCurrentSectionIndex(0);
    }
  };

  const hasPrevious = currentChapterIndex > 0 || currentSectionIndex > 0;
  const hasNext = currentChapterIndex < chapters.length - 1 ||
                  currentSectionIndex < currentChapter.sections.length - 1;

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 mb-3 text-gray-700">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatText(item) }} />
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto mb-4">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  {tableRows[0].map((cell, i) => (
                    <th key={i} className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-800">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-gray-300 px-3 py-2 text-gray-700"
                          dangerouslySetInnerHTML={{ __html: formatText(cell) }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
      inTable = false;
    };

    const formatText = (text: string): string => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        if (!inTable) {
          flushList();
          inTable = true;
        }
        if (!trimmed.includes('---')) {
          const cells = trimmed.split('|').filter(c => c.trim()).map(c => c.trim());
          tableRows.push(cells);
        }
        continue;
      } else if (inTable) {
        flushTable();
      }

      if (trimmed.startsWith('- ')) {
        if (!inList) {
          inList = true;
        }
        listItems.push(trimmed.substring(2));
        continue;
      } else if (inList) {
        flushList();
      }

      if (trimmed.startsWith('### ')) {
        elements.push(
          <h4 key={`h4-${elements.length}`} className="text-base font-semibold text-gray-800 mt-4 mb-2">
            {trimmed.substring(4)}
          </h4>
        );
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <h3 key={`h3-${elements.length}`} className="text-lg font-bold text-indigo-700 mt-5 mb-3">
            {trimmed.substring(3)}
          </h3>
        );
      } else if (trimmed === '') {
        continue;
      } else {
        elements.push(
          <p key={`p-${elements.length}`} className="text-gray-700 mb-3 leading-relaxed"
             dangerouslySetInnerHTML={{ __html: formatText(trimmed) }} />
        );
      }
    }

    flushList();
    flushTable();

    return elements;
  };

  return (
    <div className="max-w-3xl mx-auto h-full flex flex-col">
      {/* Chapter/Section selector */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 mb-3">
        <div className="flex items-center gap-3">
          <select
            value={currentChapterIndex}
            onChange={(e) => {
              setCurrentChapterIndex(Number(e.target.value));
              setCurrentSectionIndex(0);
            }}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 outline-none"
          >
            {chapters.map((chapter, idx) => (
              <option key={chapter.id} value={idx}>
                Rozdział {chapter.number}: {chapter.title}
              </option>
            ))}
          </select>
          <select
            value={currentSectionIndex}
            onChange={(e) => setCurrentSectionIndex(Number(e.target.value))}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 outline-none"
          >
            {currentChapter.sections.map((section, idx) => (
              <option key={section.id} value={idx}>
                {section.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-3">
          <div className="text-xs opacity-80 mb-1">
            Rozdział {currentChapter.number} • Sekcja {currentSectionIndex + 1} z {currentChapter.sections.length}
          </div>
          <h2 className="text-lg font-bold">{currentSection.title}</h2>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-4">
          {renderContent(currentSection.content)}
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200 px-4 py-3 bg-gray-50 flex items-center justify-between">
          <button
            onClick={goToPrevious}
            disabled={!hasPrevious}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              hasPrevious
                ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Poprzednia
          </button>

          <div className="text-xs text-gray-500">
            {currentGlobalSection} / {totalSections}
          </div>

          <button
            onClick={goToNext}
            disabled={!hasNext}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              hasNext
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-md'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            Następna
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
