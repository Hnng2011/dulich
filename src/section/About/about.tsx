import React from 'react';
import Container from '@/components/ui/container';
import './styles.css';
import Image from "next/image"
import Flex from '@/components/ui/flex';
import Grid from '@/components/ui/grid';

const source = [
    {
        src: '/assets/img/vinhhalong.webp',
        title: 'Vịnh Hạ Long',
    },
    {
        src: '/assets/img/haugiang.jpg',
        title: 'Hậu Giang',
    }, {
        src: '/assets/img/dongphongnha.jpg',
        title: 'Quảng Bình',
    }

]

const source2 = [
    {
        src: '/assets/img/danang.jpg',
        title: 'Đà Nẵng',
    }, {
        src: '/assets/img/binhdinh.jpg',
        title: 'Bình Định',
    }, {
        src: '/assets/img/binhthuan.png',
        title: 'Bình Thuận',
    }
]

export default function About() {
    return (
        <div className='w-full h-full box-content'>
            <Container className='pb-12 pt-6' >
                <Flex col className='pb-12'>
                    <h1 className='text-2xl md:text-3xl font-black font-bitter mb-8'>Dịch vụ Du lịch và Lữ hành</h1>
                    <p className='mb-4 text-justify normal-case'>
                        Chào mừng đến với dịch vụ du lịch và lữ hành của chúng tôi, nơi bạn có thể khám phá những hành trình đầy màu sắc và trải nghiệm những kỳ quan tuyệt vời của thế giới. Tại đây, chúng tôi cung cấp một loạt các tour du lịch và chương trình lữ hành đa dạng, từ những điểm đến phổ biến nhất đến những nơi ít người biết đến nhưng không kém phần thú vị.
                    </p>
                    <p className='mb-4 text-justify normal-case'>
                        Với đội ngũ hướng dẫn viên chuyên nghiệp và tận tâm cùng các dịch vụ chăm sóc khách hàng hàng đầu, chúng tôi cam kết mang lại cho bạn trải nghiệm du lịch đáng nhớ và an toàn nhất. Bất kể bạn là một nhà thám hiểm phiêu lưu hay một du khách muốn thư giãn, chúng tôi luôn sẵn lòng phục vụ và đáp ứng mọi nhu cầu của bạn.</p>
                    <p className='text-justify normal-case'>
                        Hãy để chúng tôi hướng dẫn bạn khám phá thế giới, tạo ra những kỷ niệm vĩnh cửu và chia sẻ những cảm xúc khó quên trên mỗi hành trình. Hãy đồng hành cùng chúng tôi và khám phá những điều mới mẻ mỗi ngày!</p>
                </Flex>
                <Flex className='h-[600px] gap-3'>
                    <Grid template='col' count={2} gap={3} className='w-full h-60 place-content-center'>
                        {
                            source.map((src, index) => {
                                return (
                                    <div key={index} className={`hover-cus overflow-hidden h-[300px] ${index === source.length - 1 && 'col-span-2'}`}>
                                        <p className='text-base'>{src.title}</p>
                                        <Image key={index} alt='scenario' className='h-full w-full' src={src.src} fill />                                    </div>

                                )
                            })
                        }
                    </Grid>
                    <Grid template='col' count={2} gap={3} className='w-full h-60 place-content-center'>
                        {
                            source2.map((src, index) => {
                                return (
                                    <div key={index} className={`hover-cus overflow-hidden h-[300px] ${index === 0 && 'col-span-2'}`}>
                                        <p className='text-base'>{src.title}</p>
                                        <Image key={index} alt='scenario' className='object-cover h-full w-full' src={src.src} fill />
                                    </div>
                                )
                            })
                        }
                    </Grid>
                </Flex>
            </Container >
        </div>
    );
}
