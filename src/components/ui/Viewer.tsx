'use client'
import React, { useRef, useState, useEffect } from 'react';
import  { createRoot }  from 'react-dom/client';
import  * as XLSX from 'xlsx'

const ExcelViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
   const [selectedFileName, setSelectedFileName] = useState('');
  const renderExcelData = (rows: string[][]) => {
    return (
      <table className='border-2 border-black' style={{ overflow: 'auto' }} >
        <thead>
          <tr>
            {rows[0].map((header, index) => (
              <th className='border-2 border-black px-2 bg-green-300' key={index}>
                {header}
              </th>
            ))}
          </tr>

        </thead>
        <tbody className='border-2 border-black' >
          {rows.slice(1).map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td className='border-2 border-black px-2 text-zinc-500' key={index}>
                  {cell === null || cell === undefined ? " " : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = e.target.files && e.target.files[0];
    if (fileObj) {
    
      setSelectedFileName(fileObj.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryData = event.target?.result as string | undefined;
        if (binaryData !== undefined) {
          const workbook = XLSX.read(binaryData, { type: 'binary' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];


         
        // Get the range of cells
        const range = XLSX.utils.decode_range(worksheet['!ref'] as string);

        const rows: string[][] = [];
        for (let R = range.s.r; R <= range.e.r; ++R) {
          const row: string[] = [];
          for (let C = range.s.c; C <= range.e.c; ++C) {
            const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
            const cell = worksheet[cellAddress];
            const cellValue = cell && cell.v !== undefined ? String(cell.v) : ''; // Use empty string for empty cells
            row.push(String(cellValue));
          }
          rows.push(row);
        }



          // const jsonData = (XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: true })) as string[][];
          // const rows: string[][] = jsonData.map((row: unknown[]) => row.map((cell: unknown) => String(cell))); 

          const excelData = renderExcelData(rows);
          const container = containerRef.current;
          if (container) {
           
            createRoot(container).render(excelData);
          }
        }
      };
      reader.readAsBinaryString(fileObj);
    }
  };

  useEffect(() => {
    return () => {
      const container = containerRef.current;
      if (container) {
        createRoot(container).unmount();
      }
    };
  }, [])

    return (
    <div className='bg-sky-100'>
      <div className="flex flex-row justify-between gap-3 px-1 py-6 mt-5 ">
        <label htmlFor="file-upload" className="relative cursor-pointer">
          <span className="  text-base font-medium text-gray-700 px-4 border-2 py-2 border-sky-500 rounded-md hover:opacity-70 ">Upload Excel File</span>
          <input id="file-upload" type="file" className="sr-only" onChange={handleFileUpload} accept=".xlsx, .xls" />
          <span className="text-sm text-gray-500 px-5 ">{selectedFileName || 'No file selected'}</span>
        </label>
      </div>
      <div ref={containerRef} id="excel-container" style={{ maxHeight: '500px', overflow: 'auto' }}></div>
    </div>
  );
};

export default ExcelViewer;