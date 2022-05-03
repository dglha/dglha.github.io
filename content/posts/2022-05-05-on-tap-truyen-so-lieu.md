---
title: Ôn tập Kỹ thuật truyền số liệu
date: 2022-05-05 22:00:00
tags: ['Learn', 'University']
cover_image: ./05-05-22-data-transmission/Cau6.png
---

## LÝ THUYẾT

![theory](./images/05-05-22-data-transmission/theory.png)

### Mô hình truyền số liệu

### Mô hình OSI

![osi](./images/05-05-22-data-transmission/OSI_theory.png)

- Là viết tắt của **Kết nối các hệ thống mở** (Open Systems Interconnection).
- Phát triển bởi International Organization for Standardization (ISO).
- Có **7 tầng**:

    ![osi layer](./images/05-05-22-data-transmission/OSI_layer.png)

  - **Tầng vật lý (Physical Layer)**:
    Tầng vật lý định nghĩa tất cả các đặc tả về điện và vật lý cho các thiết bị. Trong đó bao gồm bố trí của các chân cắm (pin), các hiệu điện thế, và các đặc tả về cáp nối (cable). Các thiết bị tầng vật lý bao gồm Hub, bộ lặp (repeater), thiết bị chuyển đổi tín hiệu (converter), ...

    Chức năng và dịch vụ căn bản được thực hiện bởi tầng vật lý bao gồm:
    - Thiết lập hoặc ngắt mạch kết nối điện (electrical connection) với một môi trường truyền dẫn phương tiện truyền thông (transmission medium).

    - Tham gia vào quy trình mà trong đó các tài nguyên truyền thông được chia sẻ hiệu quả giữa nhiều người dùng.

    - Điều chế (modulation), hoặc biến đổi giữa biểu diễn dữ liệu số (digital data) của các thiết bị người dùng và các tín hiệu tương ứng được truyền qua kênh truyền thông.

  - **Tầng liên kết dữ liệu (Data-Link Layer)**:

    Tầng liên kết dữ liệu cung cấp các phương tiện có tính chức năng và quy trình để truyền dữ liệu giữa các thực thể mạng (truy cập đường truyền, đưa dữ liệu vào mạng), phát hiện và có thể sửa chữa các lỗi trong tầng vật lý nếu có.

    Tầng liên kết dữ liệu chính là nơi các thiết bị chuyển mạch (switches) hoạt động. Kết nối chỉ được cung cấp giữa các nút mạng được nối với nhau trong nội bộ mạng.

  - **Tầng mạng (Network Layer)**:

    Tầng mạng cung cấp các chức năng và quy trình cho việc truyền các chuỗi dữ liệu có độ dài đa dạng, từ một nguồn tới một đích, thông qua một hoặc nhiều mạng, trong khi vẫn duy trì chất lượng dịch vụ (quality of service) mà tầng giao vận yêu cầu.

    Tầng mạng thực hiện chức năng định tuyến. Các thiết bị định tuyến (router) hoạt động tại tầng này.

  - **Tầng giao vận (Transport Layer)**:

    Tầng giao vận cung cấp dịch vụ chuyên dụng chuyển dữ liệu giữa các người dùng tại đầu cuối.

    Tầng này là nơi các thông điệp được chuyển sang thành các gói tin TCP hoặc UDP. Ở tầng 4 địa chỉ được đánh là address ports, thông qua address ports để phân biệt được ứng dụng trao đổi.

  - **Tầng phiên (Session layer)**:

    Tầng phiên kiểm soát các (phiên) hội thoại giữa các máy tính.

    Tầng này thiết lập, quản lý và kết thúc các kết nối giữa trình ứng dụng địa phương và trình ứng dụng ở xa. Tầng này còn hỗ trợ hoạt động song công (duplex) hoặc bán song công (half-duplex) hoặc đơn công (Simplex) và thiết lập các quy trình đánh dấu điểm hoàn thành (checkpointing).

  - **Tầng trình diễn (Presentation layer)**:

    - Dịch các mã ký tự từ ASCII sang EBCDIC.
    - Chuyển đổi dữ liệu, ví dụ từ số interger sang số dấu phảy động.
    - Nén dữ liệu để giảm lượng dữ liệu truyền trên mạng.
    - Mã hoá và giải mã dữ liệu để đảm bảo sự bảo mật trên mạng.

  - **Tầng ứng dụng (Application layer)**:

    Tầng ứng dụng là tầng gần với người sử dụng nhất. Nó cung cấp phương tiện cho người dùng truy nhập các thông tin và dữ liệu trên mạng thông qua chương trình ứng dụng.

## ÔN TẬP BÀI TẬP

![exercise](./images/05-05-22-data-transmission/exercies.png)

### Câu 1

I = `11010110`

G = `x4 + x3 + 1` = **11001**

Thêm (lenght(G) - 1 = 5 - 1 = 4) 4 bit `0` vào nguồn I, ta được P = `110101100000`

Chia đa thức P:G theo kiểu nhị phân.

```shell
 110101100000 | 11001
-11001        | 10010101
--------------
 000111
--------------
    1111
--------------
    11110
   -11001
--------------
    0011100    
     -11001
    ----------
      0010100
       -11001
    ----------
         1101 -> Phần dư R
```

=> Dãy bit được chuyển đi `D = P + R` = `110101100000 + 1101 = 110101101101`

### Câu 2

I = `10010011`

G = `x5 + x3 + x + 1` = **101011**

Thêm 5 bit `0` vào nguồn I, ta được P = `1001001100000`

Chia đa thức P:G theo kiểu nhị phân:

```shell
 1001001100000 | 101011
-101011        | 10110001
----------------
   111111
  -101011
----------------
    101000
   -101011
----------------
        110000
       -101011
    ------------
         11011 -> Phần dư R
```

=> Dãy bit được chuyển đi `D = P + R` = `1001001100000 + 11011 = 1001001111011`

Test:

```shell
 1001001111011 | 101011
-101011        | 10110001
-----------
   111111
  -101011
-----------
    101001
   -101011
---------------
        101011
       -101011
    -----------
             0    => Xác xuất cao là không có lỗi
```

### Câu 3

D = `111101101100`

G = `x4 + x + 1` = **10011**`

Ta thực hiện phép chia D:G

```shell
 111101101100 | 10011
-10011        | 111000100
-----------
  11011
 -10011
-----------
   10001
  -10011
-----------
      10011
     -10011
     ------
      0000000 => Không có lỗi
```

Khung dữ liệu khả năng cao không có lỗi vì máy thu không phát hiện được lỗi (Kết quả số dư khi thực hiện phép `D:G = R = 0`)

Nếu chuỗi bit thu được đúng, ta có được chuỗi bit dữ liệu ban đầu như sau: `11110110`

### Câu 4

D = `1001100010111`

G = `x5 + x2 + 1` = **100101**

Ta thực hiện phép chia D:G

```shell
 1001100010111 | 100101
-100101        | 10001101
-----------
     110010
    -100101
    --------
      101111
     -100101
    ----------
        101011
       -100101
       ---------
          1110  => Dư R != 0
```

Khung dữ liệu có lỗi vì máy thu phát hiện được lỗi (kết quả số dư khi thực hiện phép `D:G = R != 0`).

## Câu 5

[Tham khảo](https://www.youtube.com/watch?v=i_TLLACZuRk)

Input: `1001100010111`

- **NRZ-I**:  Non Return to Zero Invert
  
  - Gặp bit cao `1` : Đảo chiều.
  
  - Gặp bit thấp `0`: Giữ nguyên.

    ![NRZ-I](./images/05-05-22-data-transmission/nrzi.png)

- **NRZ-L**: Non Return to Zelo Level
  
  - Gặp `1`: Vẽ cao.
  
  - Gặp `0`: Vẽ thấp.

    ![NRZ-L](./images/05-05-22-data-transmission/nrzl.png)

- **bipolar AMI**:
  
  - `0`: Biểu diễn bởi đường thẳng.
  
  - `1`: Biểu diễn xoay chiều bởi 2 giá trị Dương (cực ao) hoặc Âm (cực thấp).

- **Manchester**:
  
  - `0`: Chuyển đổi từ mức **cao** sang **thấp** khi ở giữa khoảng thời gian xung (pulse interval).
  
  - `1`: Chuyển đổi từ mức **thấp** sang **cao** khi ở giữa khoảng thời gian xung.

- **Differential Manchester**: Luôn đổi chiều khi ở giữa khoảng thời gian xung.
  
  - `0`: Đổi chiều tại thời gian bắt đầu xung.
  
  - `1`: Không đổi chiều tại thời gian bắt đầu xung.
  
  ![Manschester](./images/05-05-22-data-transmission/bipo_manschester_differential.jpg)

## Câu 6

Giải mã Polar NRZ-L dạng sóng hình như sau:

![Cau6](./images/05-05-22-data-transmission/Cau6.png)

- `1`: Vẽ cao

- `0`: Vẽ thấp

=> `10110001`

**Note:** Update lý thuyết sau nếu rảnh 😅.
