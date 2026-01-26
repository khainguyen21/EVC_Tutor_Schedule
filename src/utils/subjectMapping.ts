/**
 * Maps individual subject strings to their field/category
 * Used to group tutors by subject area
 * Example: "COMSC 075" → "Computer Science"
 */
export function getFieldFromSubject(subject: string): string {
  const upperSubject = subject.toUpperCase();

  if (upperSubject.includes('ACCOUNTING')) return 'Accounting';
  
  if (upperSubject.includes('BIO') || upperSubject === 'BIOLOGY') return 'Biology';
  
  if (upperSubject.includes('CHEM')) return 'Chemistry';
  
  if (upperSubject.includes('COMSC') || upperSubject === 'COMPUTER SCIENCE') return 'Computer Science';
  
  if (
    upperSubject.includes('MATH') || 
    upperSubject === 'MATHEMATICS' || 
    upperSubject.includes('STAT')
  ) return 'Math';
  
  if (upperSubject.includes('ENGLISH') || upperSubject === 'ESL') return 'English';
  
  if (upperSubject === 'PHYSICS' || upperSubject === 'ASTRONOMY' || upperSubject.includes('PHYSIC')) return 'Physics';
  
  if (upperSubject.includes('ART')) return 'Art';
  
  if (upperSubject.includes('HISTORY')) return 'History';
  
  if (upperSubject.includes('PSYCHOLOGY')) return 'Psychology';
  
  if (upperSubject === 'SPANISH') return 'Spanish';
  
  if (upperSubject === 'MUSIC') return 'Music';
  
  if (upperSubject === 'VIETNAMESE') return 'Vietnamese';
  
  if (upperSubject.includes('OPEN COMPUTER LAB')) return 'Open Computer Lab';

  return 'Other';
}
// getFieldFromSubject("COMSC 075")        // → "Computer Science"
// getFieldFromSubject("Math 1A")          // → "Math"
// getFieldFromSubject("STAT C1000")       // → "Math"
// getFieldFromSubject("BIO 020")          // → "Biology"


/**
 * Get all unique fields from a list of subjects
 * Example: ["CHEM 015", "CHEM 30A", "MATH 020", "MATH 021"] → ["Chemistry", "Math"]
*/
export function getUniqueFields(subjects: string[]): string[] {
    const fields = subjects.map(getFieldFromSubject);
    return Array.from(new Set(fields));
}
// const ngocLeSubjects = ["CHEM 015", "CHEM 30A", "MATH 020", "MATH 021"];
// getUniqueFields(ngocLeSubjects); → ["Chemistry", "Math"]


/**
 * Filter subjects that belong to a specific field
 * Example: ["CHEM 015", "CHEM 30A", "MATH 020", "MATH 021"] → ["CHEM 015", "CHEM 30A"]
 */
export function filterSubjectsByField(subjects: string[], field: string): string[] {
  return subjects.filter(subject => getFieldFromSubject(subject) === field);
}

// const ngocLeSubjects = ["CHEM 015", "CHEM 30A", "MATH 020", "MATH 021"];
// filterSubjectsByField(ngocLeSubjects, "Chemistry"); → ["CHEM 015", "CHEM 30A"]


/**
 * Format subjects for display by removing redundant prefixes and grouping consecutive numbers
 * Example: ["MATH 020", "MATH 021", "MATH 022", "MATH 066", "MATH 067"] → "MATH 020-022, 066/67"
 */
export function formatSubjectsForDisplay(subjects: string[]): string {
  if (subjects.length === 0) return '';
  if (subjects.length === 1) return subjects[0];

  // Group subjects by their prefix (e.g., "MATH", "COMSC", "BIO")
  const grouped: Record<string, string[]> = {};
  
  subjects.forEach(subject => {
    // Extract prefix (e.g., "MATH 020" → "MATH")
    const match = subject.match(/^([A-Z]+)\s+(.+)$/);
    
    if (match) {
      const prefix = match[1];
      const code = match[2];
      
      if (!grouped[prefix]) {
        grouped[prefix] = [];
      }
      grouped[prefix].push(code);
    } else {
      // No prefix pattern, add as-is
      if (!grouped['_other']) {
        grouped['_other'] = [];
      }
      grouped['_other'].push(subject);
    }
  });

  // Format each group with smart grouping
  const formatted = Object.entries(grouped).map(([prefix, codes]) => {
    if (prefix === '_other') {
      return codes.join(', ');
    }
    
    // Sort codes numerically
    const sortedCodes = codes.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''), 10);
      const numB = parseInt(b.replace(/\D/g, ''), 10);
      return numA - numB;
    });

    const compactCodes = compactConsecutiveNumbers(sortedCodes);
    return `${prefix} ${compactCodes}`;
  });

  return formatted.join(' | ');
}

/**
 * Compact consecutive numbers into ranges
 * Example: ["020", "021", "022", "066", "067", "071"] → "020-022, 066/67, 071"
 */
function compactConsecutiveNumbers(codes: string[]): string {
  if (codes.length === 0) return '';
  if (codes.length === 1) return codes[0];

  const groups: string[][] = [];
  let currentGroup: string[] = [codes[0]];

  for (let i = 1; i < codes.length; i++) {
    const prevNum = parseInt(codes[i - 1].replace(/\D/g, ''), 10);
    const currNum = parseInt(codes[i].replace(/\D/g, ''), 10);

    // Check if consecutive
    if (currNum === prevNum + 1) {
      currentGroup.push(codes[i]);
    } else {
      groups.push(currentGroup);
      currentGroup = [codes[i]];
    }
  }
  groups.push(currentGroup);

  // Format each group
  return groups.map(group => {
    if (group.length === 1) {
      return group[0];
    } else if (group.length === 2) {
      // Use slash for pairs: "066/67"
      const first = group[0];
      const second = group[1];
      const secondShort = second.slice(-2); // Last 2 digits
      return `${first}/${secondShort}`;
    } else {
      // Use range for 3+: "020-022"
      return `${group[0]}-${group[group.length - 1]}`;
    }
  }).join(', ');
}