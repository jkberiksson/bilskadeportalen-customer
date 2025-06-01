import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { LuCloudUpload, LuFile, LuX } from 'react-icons/lu';

const dropzoneConfig = [
    {
        id: 'driver-license',
        title: 'Körkort',
        description: 'Bild på körkort',
    },
    {
        id: 'key',
        title: 'Nyckel',
        description: 'Bild på nyckel',
    },
];

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export default function Step3({ errors, images, setImages }) {
    const onDrop = useCallback(
        (acceptedFiles, id) => {
            if (acceptedFiles.length > 0) {
                setImages((prev) => [...prev, { id: id, file: acceptedFiles[0] }]);
            }
        },
        [setImages]
    );

    const removeFile = (id) => {
        setImages((prev) => prev.filter((f) => f.id !== id));
    };

    return (
        <div className='space-y-6 bg-white border border-border rounded-xl p-6 shadow my-6'>
            <div>
                <h3 className='text-lg font-bold text-text-primary'>Bilder</h3>
                <p className='text-xs text-gray-400'>Accepterade format: JPG, PNG, WEBP, HEIC, HEIF, DNG (max 10MB/bild)</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {dropzoneConfig.map(({ id, title, description }) => {
                    const { getRootProps, getInputProps } = useDropzone({
                        onDrop: (acceptedFiles) => onDrop(acceptedFiles, id),
                        accept: {
                            'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.heic', '.heif', '.dng'],
                            'image/x-adobe-dng': ['.dng'],
                            'application/octet-stream': ['.dng'],
                        },
                        maxFiles: 1,
                        maxSize: 10 * 1024 * 1024, // 10MB
                    });

                    const file = images.find((f) => f.id === id)?.file;
                    const isUnsupportedFormat = file && !['image/jpeg', 'image/png', 'image/webp'].includes(file.type);
                    const imageUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

                    return (
                        <div key={id} className='aspect-square'>
                            {file ? (
                                <div className='h-full border border-border rounded-lg p-4 bg-gray-50 relative'>
                                    {isUnsupportedFormat ? (
                                        <div className='flex flex-col items-center justify-center h-full text-center'>
                                            <LuFile className='h-8 w-8 text-gray-400 mb-2' />
                                            <p className='text-sm font-medium text-gray-900 truncate w-full'>{file.name}</p>
                                            <p className='text-xs text-gray-500'>{formatFileSize(file.size)}</p>
                                            <p className='text-xs text-gray-500 mt-1'>{file.type}</p>
                                        </div>
                                    ) : (
                                        <div className='relative h-full'>
                                            {imageUrl && (
                                                <Image
                                                    width={100}
                                                    height={100}
                                                    src={imageUrl}
                                                    alt={title}
                                                    className='object-contain w-full h-full'
                                                    unoptimized
                                                />
                                            )}
                                        </div>
                                    )}
                                    <button
                                        type='button'
                                        onClick={() => removeFile(id)}
                                        className='absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-100'>
                                        <LuX className='h-4 w-4 text-gray-500' />
                                    </button>
                                </div>
                            ) : (
                                <div
                                    {...getRootProps()}
                                    className='h-full border-2 border-dashed border-gray-300 rounded-lg p-4 overflow-hidden text-center cursor-pointer transition-colors duration-150 hover:border-gray-500 bg-gray-50'>
                                    <input {...getInputProps()} />

                                    <div className='flex flex-col items-center justify-center h-full'>
                                        <LuCloudUpload className='mx-auto h-8 w-8 text-gray-400' />
                                        <p className='mt-2 text-sm font-medium text-gray-900'>{title}</p>
                                        <p className='mt-1 text-xs text-gray-500'>{description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {errors.images && <p className='text-xs text-red-500 mt-1'>{errors.images.message}</p>}
        </div>
    );
}
